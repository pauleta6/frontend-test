import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const product = props.product;
  return (
    <div
      className="product-card-container"
      onClick={() => navigate(`/detail/${product.brand}/${product.model}`)}
    >
      <div className="product-card-image-container">
        <img src={product.imgUrl} className="product-card-image" alt=""></img>
      </div>
      <div className="product-card-info-container">
        <div className="product-card-name">{product.brand}</div>
        <div>{product.model}</div>
        {product.price && (
          <div className="product-card-price">{product.price}€</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
