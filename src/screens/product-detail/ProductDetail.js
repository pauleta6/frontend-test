import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import ProductActions from "./components/ProductActions";
import ProductDescription from "./components/ProductDescription";

import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { _productsService } = useAppContext();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    const getProduct = async () => {
      const result = await _productsService.getProduct(id);
      result.message ? setProduct(null) : setProduct(result);
    };
    getProduct();
  }, [_productsService, id]);
  return product !== undefined ? (
    product ? (
      <div className="product-detail-container">
        <img className="product-detail-image" src={product.imgUrl} alt=""></img>
        <div className="product-detail-info">
          <ProductDescription product={product}></ProductDescription>
          <ProductActions product={product}></ProductActions>
        </div>
      </div>
    ) : (
      <div>This product doesn't exist</div>
    )
  ) : (
    <></> //TODO Add spinner
  );
};

export default ProductDetail;
