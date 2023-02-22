import { useNavigate } from "react-router-dom";

import "./Header.css";
import AppLogo from "../../assets/svg/AppLogo.svg";
import Cart from "./components/Cart";
import BreadCrumbs from "./components/BreadCrumbs";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="header-colored">
        <div className="app-info" onClick={() => navigate("/")}>
          <img src={AppLogo} className="app-logo" alt=""></img>
          <div className="app-name">Mobile Shop</div>
        </div>
        <Cart number={2}></Cart>
      </div>
      <BreadCrumbs></BreadCrumbs>
    </div>
  );
};

export default Header;
