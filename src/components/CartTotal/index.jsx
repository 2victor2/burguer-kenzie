import "./styles.css";
import Button from "../Button";

const CartTotal = ({ dataCart, setDataCart }) => (
  <div className="cart-total">
    <div className="total">
      <h4>Total:</h4>
      <span>
        {dataCart
          .reduce((acc, { price }) => acc + price, 0)
          .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </span>
    </div>
    <Button classname="remove-button" callback={() => setDataCart([])}>Remover todos</Button>
  </div>
);

export default CartTotal