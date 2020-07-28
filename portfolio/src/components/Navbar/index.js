import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";
import Resume from "../../pages/assets/AlexTaggart_Resume.pdf";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className="NavBar">
    <Navbar.Brand >
      <Link to="/" className="Link"> 
      Alex Taggart
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link >
          <Link to="/" className="link">
            About
            </Link>
          </Nav.Link>
        <Nav.Link>
        <Link to="/Projects" className="link">
          Projects
        </Link>
        </Nav.Link>
        <Nav.Link>
          <a href={Resume} className="link">
          Resume
          </a>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar;
