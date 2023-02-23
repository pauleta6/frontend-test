import "./ProductDescription.css";

const ProductDescription = (props) => {
  const product = props.product;
  return (
    <div className="product-description-container">
      <div className="product-title">{`${product.brand} ${product.model}`}</div>
      <div>{product.price}</div>
      <div>&#x2022; CPU: {product.cpu}</div>
      <div>&#x2022; RAM: {product.ram}</div>
      <div>&#x2022; OS: {product.os}</div>
      <div>&#x2022; Display resolution: {product.displayResolution}</div>
      <div>&#x2022; Battery: {product.battery}</div>
      <div className="product-cameras">
        &#x2022; Cameras:
        <div className="product-cameras-info">
          <div>&#x2022; Primary camera: {product.primaryCamera}</div>
          <div>&#x2022; Secondary camera: {product.secondaryCmera}</div>
        </div>
      </div>
      <div>&#x2022; Dimentions: {product.dimentions}</div>
      <div>&#x2022; Weight: {product.weight}</div>
    </div>
  );
};

export default ProductDescription;
