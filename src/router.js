import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./screens/product-detail/ProductDetail";
import ProductList from "./screens/product-list/ProductList";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header></Header>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <ProductList></ProductList>,
      },
      {
        path: "/profile",
        element: <ProductDetail></ProductDetail>,
      },
    ],
  },
]);

export default router;
