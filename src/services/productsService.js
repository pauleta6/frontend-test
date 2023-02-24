import { action, extendObservable } from "mobx";
import { fetchProduct, fetchProducts, addProductToCart } from "../utils/api";

class ProductsService {
  constructor() {
    extendObservable(this, {
      nItemsInCart: localStorage.getItem("nItemsInCart"),
      productList: undefined,
    });
  }

  getAllProducts = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (
      !!products &&
      !!products.expiracy &&
      new Date(products.expiracy) > Date.now()
    ) {
      this.setProductList(products.productList);
    } else {
      localStorage.removeItem("products");
      fetchProducts().then((result) => {
        this.setProductList(result);
        localStorage.setItem(
          "products",
          JSON.stringify({
            productList: result,
            expiracy: Date.now() + 60 * 60 * 1000,
          })
        );
      });
    }
  };

  getProduct = (id, callback) => {
    const product = JSON.parse(localStorage.getItem(id));
    if (
      !!product &&
      !!product.expiracy &&
      new Date(product.expiracy) > Date.now()
    ) {
      callback(product.product);
    } else {
      localStorage.removeItem(id);
      const setItems = async () => {
        const result = await fetchProduct(id);
        if (!result.message) {
          localStorage.setItem(
            id,
            JSON.stringify({
              product: result,
              expiracy: Date.now() + 60 * 60 * 1000,
            })
          );
          callback(result);
        } else {
          callback(null);
        }
      };
      setItems();
    }
  };

  addProductToCart = async (productBody) => {
    const response = await addProductToCart(productBody);
    if (!response.message) {
      this.setNItemsInCart(this.nItemsInCart + response.count);
      localStorage.setItem("nItemsInCart", this.nItemsInCart);
    }
  };

  setNItemsInCart = action((value) => {
    this.nItemsInCart = value;
  });

  setProductList = action((value) => {
    this.productList = value;
  });
}

export default ProductsService;
