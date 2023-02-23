import { Link, useLocation } from "react-router-dom";

import arrowRight from "../../../assets/svg/ArrowRight.svg";
import "./BreadCrumbs.css";

const BreadCrumbs = () => {
  const route = useLocation();
  const pathSplit = route.pathname.slice(1).split("/");

  return (
    <div className="breadcrumbs-container">
      <Link to="/" style={{ color: "#95BDFF" }}>
        Home
      </Link>
      {pathSplit.length > 1 && pathSplit[0] === "detail" && (
        <>
          <img src={arrowRight} className="arrow-right" alt=""></img>
          <Link
            to={route.pathname}
            style={{ color: "#000", pointerEvents: "none" }}
          >
            {`${pathSplit[2].replaceAll("%", " ")} ${pathSplit[3].replaceAll(
              "%",
              " "
            )}`}
          </Link>
        </>
      )}
    </div>
  );
};

export default BreadCrumbs;
