import "./styles.css"
import Product from "../Product"

const ProductsList = ({ data, cartData, setCartData}) => {

    return (
        <ul className="products-list">
            {data.map(product => <Product key={product.id} product={product} />)}
        </ul>
    )
}

export default ProductsList