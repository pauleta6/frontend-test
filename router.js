import { createBrowserRouter, Outlet } from "react-router-dom";
import ProductDetail from "./src/screens/product-detail/product-detail";
import ProductList from "./src/screens/product-list/product-list";

const router = createBrowserRouter([
  {
    element: (
      <>
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
