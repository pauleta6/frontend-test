import { createContext, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const withAppContext = (Component) => (props) => {
  return <Component {...props} _appContext={useAppContext()} />;
};

export default AppContext;
