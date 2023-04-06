import React, { useState, useEffect } from "react";
// import Signup from "./user/Signup";
// import Signin from "./user/Signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import Modal from "react-bootstrap/Modal";
import './App.css'

export default function App() {
  return (
    <div className="App pageContainer">
      <NavbarComp />
      <main className="mainS"> </main>
      <Footer />
    </div>
  );
}