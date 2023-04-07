import React, { Component, useState, useEffect } from "react";
import Signup from '../user/Signup'
import Signin from '../user/Signin'
import ItemList from '../item/ItemList'
import Axios from "axios";
import jwt_decode from "jwt-decode";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
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

export default function NavbarComp() {

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
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Tawzee3at</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signin">Signin</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/logout" onClick={onLogoutHandler}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
        <Route path="/" element={
                isAuth ? 
                <ItemList /> 
                : 
                <Signin login={loginHandler}></Signin>}>
        </Route>
        <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
        <Route path="/signin" element={
                isAuth ? 
                <ItemList /> 
                : 
                <Signin login={loginHandler}></Signin>}>
        </Route>
        </Routes>
      </div>
      </Router>
      </>
  )
  }
