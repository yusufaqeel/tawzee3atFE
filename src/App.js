import React, { Component, useState, useEffect } from "react";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import ItemList from './item/ItemList'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import jwt_decode from "jwt-decode";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import "./App.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);


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
    <>
    <Router>
    <div>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">Tawzee3at</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/item">Shop</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/signin">Signin</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/signup">Signup</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/logout"onClick={onLogoutHandler}>Signout</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
    <div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/item" element={<ItemList></ItemList>}></Route>
        <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
        <Route path="/signin" element={
          isAuth ?
          <ItemList />
          :
          <Signin login={loginHandler}></Signin>
        }></Route>
      </Routes>
    </div>
      <Footer />
      </Router>
      </>
  )
  }

