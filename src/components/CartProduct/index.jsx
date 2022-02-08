import "./styles.css";

const CartProduct = ({ product, handleClick }) => {
  const { name, category, img } = product;
  return (
    <li className="cart-product">
      <figure className="product-cart-img-container">
        <img src={img} alt={name} />
      </figure>
      <div className="product-cart-info">
        <h4 className="name">{name}</h4>
        <p className="category">{category}</p>
      </div>
      <span className="remove" onClick={handleClick}>Remover</span>  
    </li>
  );
};

export default CartProduct