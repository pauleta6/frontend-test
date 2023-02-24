import { productListMock, productMock } from "../models/productsMocks";
import * as utils from "../utils/api";
import ProductsService from "./productsService";

describe("ProductsService tests", () => {
  let service;
  beforeEach(() => {
    service = new ProductsService();
  });

  it("Get products from local storage when is data is not expired", () => {
    localStorage.setItem(
      "products",
      JSON.stringify({
        productList: productListMock,
        expiracy: Date.now() + 60 * 60 * 1000,
      })
    );
    service.getAllProducts();
    expect(service.productList).toEqual(productListMock);
  });

  it("Get products from server when user has no products in localstorage", () => {
    jest
      .spyOn(utils, "fetchProducts")
      .mockImplementation(() => Promise.resolve(productListMock));
    service.getAllProducts();
    expect(utils.fetchProducts).toHaveBeenCalled();
  });

  it("Get products from server when products have expired", () => {
    localStorage.setItem(
      "products",
      JSON.stringify({
        productList: productListMock,
        expiracy: Date.now() - 60 * 60 * 1000,
      })
    );
    jest
      .spyOn(utils, "fetchProducts")
      .mockImplementation(() => Promise.resolve(productListMock));
    service.getAllProducts();
    expect(utils.fetchProducts).toHaveBeenCalled();
  });

  it("Get product from local storage when is data is not expired", () => {
    localStorage.setItem(
      productMock.id,
      JSON.stringify({
        product: productMock,
        expiracy: Date.now() + 60 * 60 * 1000,
      })
    );
    const setValue = jest.fn();
    service.getProduct(productMock.id, setValue);
    expect(setValue).toHaveBeenCalledWith(productMock);
  });

  it("Get product from server when user hasn't product in localstorage", () => {
    jest
      .spyOn(utils, "fetchProduct")
      .mockImplementation(() => Promise.resolve(productMock));
    const setValue = jest.fn();
    service.getProduct(productMock.id, setValue);
    expect(utils.fetchProduct).toHaveBeenCalled();
  });

  it("Get product from server when product has expired", () => {
    localStorage.setItem(
      productMock.id,
      JSON.stringify({
        product: productMock,
        expiracy: Date.now() - 60 * 60 * 1000,
      })
    );
    jest
      .spyOn(utils, "fetchProduct")
      .mockImplementation(() => Promise.resolve(productMock));
    const setValue = jest.fn();
    service.getProduct(productMock.id, setValue);
    expect(utils.fetchProduct).toHaveBeenCalled();
  });

  afterEach(() => {
    localStorage.clear();
  });
});
