import "./styles.css";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

const Cart = ({ dataCart, setDataCart, handleClick }) => {
  return (
    <section className="cart-container">
      <div className="cart-header">
        <h3>Carrinho de compras</h3>
      </div>
      {dataCart.length > 0 ? (
        <>
          <ul className="products-cart">
            {dataCart.map((productCart, index) => (
              <CartProduct
                key={index}
                product={productCart}
                handleClick={handleClick}
              />
            ))}
          </ul>
          <CartTotal dataCart={dataCart} setDataCart={setDataCart} />
        </>
      ) : (
        <div className="empty-cart">
          <h3 className="name">Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      )}
    </section>
  );
};

export default Cart;
