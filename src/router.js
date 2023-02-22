import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
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
        path: "/detail/:id",
        element: <ProductDetail></ProductDetail>,
      },
    ],
  },
]);

export default router;
