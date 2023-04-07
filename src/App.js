import React, { useState, useEffect } from "react";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import Modal from "react-bootstrap/Modal";
import './App.css'

export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if (!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
  }, [])

  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(res => {
      console.log(res.data.token)
      // Save the token into Local Storage
      let token = res.data.token
      if(token != null){
        localStorage.setItem("token", token)
        let user = jwt_decode(token);
        setIsAuth(true)
        setUser(user)
      }
    })
    .catch(err => {
      console.log(err)
      setIsAuth(false)
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }
  return (
    <div className="App pageContainer">
      <NavbarComp />
      <main className="mainS"> </main>
      <Footer />
    </div>
  );
}