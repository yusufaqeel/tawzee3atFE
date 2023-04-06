import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Tawzee3at</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Signin</Nav.Link>
              <Nav.Link href="#pricing">Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}