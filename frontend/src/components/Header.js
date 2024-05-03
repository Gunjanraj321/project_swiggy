import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginData } from "../utils/authSlice";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const isAuthenticated = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()

  const handleLogout = () => {
    if(isAuthenticated !== null) dispatch(loginData(null));
  };

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-1 mb-2 sm:bg-green-100">
      <div className="logoContainer">
        <img className="w-40 m-3" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 space-x-5">
          <li> Online : {onlineStatus ? "✅" : "⭕"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart"> Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="bg-green-200 hover:bg-green-300 "
            onClick={handleLogout}
          >
            {isAuthenticated !== null ? "Logout" :<Link to="/login">Login</Link>}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
