import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    async function fetchBurguers() {
      const response = await (
        await fetch(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        )
      ).json();
      setProductsList(response);
    }
    fetchBurguers();
  }, []);

  const showProducts = () =>
    setFilteredList(
      productsList.filter(
        ({ name, category }) =>
          name.toUpperCase().includes(userSearch.toUpperCase()) ||
          category.toUpperCase().includes(userSearch.toUpperCase())
      )
    );

  const addOnCart = (productId) => {
    const product = productsList.find(({ id }) => id === productId);
    const alreadyOnCart = currentSale.find(({ id }) => id === productId);
    alreadyOnCart
      ? alert("Produto já adicionado ao carrinho!")
      : setCurrentSale([...currentSale, product]);
  };
  const removeFromCart = (productId) => {
    setCurrentSale(currentSale.filter(({ id }) => id !== productId));
  };
  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        filter={showProducts}
      />
      <main>
        {filteredList.length > 0 ? (
          <>
            <h1 className="showing-results">
              Resultados para: <span className="results">{userSearch}</span>
            </h1>
            <ProductsList data={filteredList} handleClick={addOnCart} />
            <Cart
              dataCart={currentSale}
              setDataCart={setCurrentSale}
              handleClick={removeFromCart}
            />
          </>
        ) : (
          <>
            <ProductsList data={productsList} handleClick={addOnCart} />
            <Cart
              dataCart={currentSale}
              setDataCart={setCurrentSale}
              handleClick={removeFromCart}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
