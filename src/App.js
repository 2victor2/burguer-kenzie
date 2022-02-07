import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  useEffect(() => {
    async function fetchBurguers() {
      const response = await (
        await fetch(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        )
      ).json();
      setProductsList(response)
    }
    fetchBurguers()
  }, []);
  const showProducts = () => {
    console.log('oi')
  }
  return <div className="App">
    <Header />
    <ProductsList data={productsList} cartData={currentSale} setCartData={setCurrentSale} />
  </div>;
}

export default App;
