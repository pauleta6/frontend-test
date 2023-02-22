import { fetchProducts } from "../utils/api";

class ProductsService {
  getAllProducts = async () => {
    return await fetchProducts();
  };
}

export default ProductsService;
