import { fetchProduct, fetchProducts } from "../utils/api";

class ProductsService {
  getAllProducts = async () => {
    return await fetchProducts();
  };

  getProduct = async (id) => {
    return await fetchProduct(id);
  };
}

export default ProductsService;
