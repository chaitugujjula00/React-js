import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
// Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-52" src={LOGO_URL}></img>
      </div>
      <div className="flex p-4 m-4 items-center">
        <ul className="flex">
          <li className="m-4 hover:cursor-pointer">onlineStatus: {onlineStatus ? "yes" : "no"}</li>
          <li className="m-4 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4  hover:cursor-pointer">
            <Link to="/about">About us</Link>
          </li>
          <li className="m-4 hover:cursor-pointer ">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="m-4 hover:cursor-pointer">
            <Link to="/cart">cart({cartItems.length} items)</Link>
          </li>
          <li className="m-4 hover:cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
