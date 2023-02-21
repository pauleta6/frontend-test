import "./Cart.css";
import ShoppingCart from "../../../assets/svg/ShoppingCart.svg";

const Chart = (props) => {
  return (
    <div className="cart-container">
      <img src={ShoppingCart} alt="" className="cart-icon"></img>
      {props.number && <div className="cart-number">{props.number}</div>}
    </div>
  );
};

export default Chart;
