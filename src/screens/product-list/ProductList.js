import { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";
import ProductCard from "./components/ProductCard";

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
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  ) : (
    <></> //TODO: add spinner
  );
};

export default ProductList;
