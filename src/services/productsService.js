import { fetchProduct, fetchProducts, addProductToCart } from "../utils/api";

class ProductsService {
  nItemsInCart = 0;

  getAllProducts = async () => {
    return await fetchProducts();
  };

  getProduct = async (id) => {
    return await fetchProduct(id);
  };

  addProductToCart = async (productBody) => {
    const response = await addProductToCart(productBody);
    if (!response.message) this.nItemsInCart = response.count;
  };
}

export default ProductsService;
