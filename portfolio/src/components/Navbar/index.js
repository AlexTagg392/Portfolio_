import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className="NavBar">
    <Navbar.Brand >
      <Link to="/Portfolio_" className="link"> 
      Alex Taggart
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link >
          <Link to="/Portfolio_" className="link">
            About
            </Link>
          </Nav.Link>
        <Nav.Link>
        <Link to="/Projects" className="link">
          Projects
        </Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar;
