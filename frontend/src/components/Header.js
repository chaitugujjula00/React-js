import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ({user,setUser}) => {
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
// Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
const remove =()=>{
  setUser(null)
}
  return (
    <div className="flex justify-between h-24 bg-pink-400 shadow-xl rounded-b-[30px] border-x-8">
      <div className=" logo-container overflow-hidden">
        <img className=" py-2 ml-20 h-24 w-24 rounded-full " src={LOGO_URL}></img>
      </div>
      <div className="flex p-4 m-4 text-lg items-center">
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
          { user === null ? (<li className="m-4 hover:cursor-pointer">
            <Link to="/login">Login</Link>
          </li>):(<li className="m-4 hover:cursor-pointer">
          <div class="dropdown">
        <div class="flex items-center cursor-pointer">
            <span class="mr-1">{user.userName}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="dropdown-menu bg-white border rounded shadow-md p-2 w-32">
            <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200"><Link to={'/'+user.userName}>Account</Link></a>
            <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200"><Link to={'/'+user.userName+'/orders'}>Orders</Link></a>
            <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={remove}><Link to={'/login'}>Sign Out</Link></a>
        </div>
    </div>
          </li>)}
        </ul>
      </div>
    </div>
  );
};

export default Header;
