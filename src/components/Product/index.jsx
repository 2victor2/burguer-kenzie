import Button from "../Button";
import "./styles.css";

const Product = ({ product, callback }) => {
  const { name, category, price, img } = product;
  return (
    <li className="product-card">
      <figure className="product-img-container">
        <img src={img} alt={name} />
      </figure>
      <div className="info-product">
        <h3 className="name">{name}</h3>
        <p className="category">{category}</p>
        <span className="price">
          {Number(price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <Button callback={callback} classname="add-button">
          Adicionar
        </Button>
      </div>
    </li>
  );
};

export default Product;
