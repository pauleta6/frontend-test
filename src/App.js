import { useRef } from "react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import AppContext from "./AppContext";
import router from "./router";
import ProductsService from "./services/productsService";

const App = () => {
  const _appContext = useRef({
    _productsService: new ProductsService(),
  });

  return (
    <AppContext.Provider value={_appContext.current}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
