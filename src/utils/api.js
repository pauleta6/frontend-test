const API_URL = "https://itx-frontend-test.onrender.com/api";

const errorHandler = (error) => console.log("Error", error);

export const fetchProducts = async () => {
  return await fetch(`${API_URL}/product`)
    .then((response) => response.json())
    .catch(errorHandler);
};

export const fetchProduct = async (productId) => {
  return await fetch(`${API_URL}/product/${productId}`)
    .then((response) => response.json())
    .catch(errorHandler);
};

export const addProductToCart = async ({ id, colorCode, storageCode }) => {
  return await fetch(`${API_URL}/cart`, {
    method: "POST",
    body: JSON.stringify({
      id,
      colorCode,
      storageCode,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch(errorHandler);
};
