import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import ProductActions from "./components/ProductActions";
import ProductDescription from "./components/ProductDescription";
import Spinner from "../../components/spinner/Spinner";

import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { _productsService } = useAppContext();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    _productsService.getProduct(id, setProduct);
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
    <div className="spinner-container">
      <Spinner></Spinner>
    </div>
  );
};

export default ProductDetail;
