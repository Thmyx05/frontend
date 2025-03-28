import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Nav.Link as={Link} to="/" className="navbar-brand">Electro-Point</Nav.Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Nav.Link as={Link} to="/" className="navbar-link active"><i className="fa-solid fa-house"></i> Domovská Obrazovka</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link as={Link} to="/kosik" className="nav-link">Košík</Nav.Link>
              </li>
              <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Uživatel</a>
                <div className="dropdown-menu">
                <Nav.Link as={Link} to="/prihlaseni" className="dropdown-item" href="#">Přihlásit se</Nav.Link>
                  <Nav.Link as={Link} to="/registrace" className="dropdown-item" href="#">Založit účet</Nav.Link>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Odhlásit se</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
