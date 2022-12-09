import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <>
      <Navbar bg="dark" varient="dark" expand="lg" collapseOnSelect>
        <Container className="">
          <Navbar.Brand className="">proShop</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Container>
              <Nav>
                <Nav.Link className="text-white">
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>

                <Nav.Link className="text-white">
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
