import { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";

import "./ProductList.css";

const ProductList = () => {
  const { _productsService } = useAppContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const result = await _productsService.getAllProducts();
      setProducts(result);
    };
    getAllProducts();
  }, [_productsService]);
  return products.length ? (
    <div className="product-list-container">
      {products.map((product) => (
        <div key={product.id}>{product.id}</div>
      ))}
    </div>
  ) : (
    <></> //TODO: add spinner
  );
};

export default ProductList;
