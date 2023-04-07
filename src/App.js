import React, { useState, useEffect } from "react";
// import Signup from "./user/Signup";
// import Signin from "./user/Signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import jwt_decode from "jwt-decode";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import "./App.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <div className="App pageContainer">
      <NavbarComp />
      <body>
        <img
          className="bg"
          src="https://cdn.pixabay.com/photo/2021/04/09/15/04/cart-6164635_1280.jpg"
        ></img>
      </body>
      <Footer />
    </div>
  );
}
