import { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";
import Spinner from "../../components/spinner/Spinner";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

import "./ProductList.css";

const ProductList = () => {
  const { _productsService } = useAppContext();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const result = await _productsService.getAllProducts();
      setProducts(result);
      setFilteredProducts(result);
    };
    getAllProducts();
  }, [_productsService]);
  return (
    <div className="product-list-screen">
      <SearchBar
        onValueChange={(value) =>
          setFilteredProducts(
            products.filter(
              (product) =>
                product.brand.toLowerCase().includes(value.toLowerCase()) ||
                product.model.toLowerCase().includes(value.toLowerCase())
            )
          )
        }
      ></SearchBar>
      {products.length ? (
        <div className="product-list-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <div className="spinner-container">
          <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};

export default ProductList;
