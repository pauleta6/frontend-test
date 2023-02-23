import { action, extendObservable } from "mobx";
import { fetchProduct, fetchProducts, addProductToCart } from "../utils/api";

class ProductsService {
  constructor() {
    extendObservable(this, {
      nItemsInCart: 0,
    });
  }

  getAllProducts = async () => {
    return await fetchProducts();
  };

  getProduct = async (id) => {
    return await fetchProduct(id);
  };

  addProductToCart = async (productBody) => {
    const response = await addProductToCart(productBody);
    if (!response.message) this.setNItemsInCart(response.count);
  };

  setNItemsInCart = action((value) => {
    this.nItemsInCart = value;
  });
}

export default ProductsService;
