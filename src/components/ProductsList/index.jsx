import "./styles.css";
import Product from "../Product";

const ProductsList = ({ data, handleClick }) => {
  return (
    <ul className="products-list">
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
          callback={handleClick}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
