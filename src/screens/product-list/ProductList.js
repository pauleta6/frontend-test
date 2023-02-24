import { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { useAppContext } from "../../AppContext";
import Spinner from "../../components/spinner/Spinner";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

import "./ProductList.css";

const ProductList = observer(() => {
  const { _productsService } = useAppContext();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    _productsService.getAllProducts();
  }, [_productsService]);

  useEffect(() => {
    setProducts(_productsService.productList);
    setFilteredProducts(_productsService.productList);
  }, [_productsService.productList]);

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
      {!!products ? (
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
});

export default ProductList;
