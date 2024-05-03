import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Contact from "./components/ContactUs";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.user);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated !== null ? <Home /> : <Navigate to="/Login" />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/restaurants/:id"
          element={
            isAuthenticated !== null ? (
              <RestaurantMenu />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route path="/cart" element={isAuthenticated !==null ?<Cart /> : <Navigate to="/Login" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
