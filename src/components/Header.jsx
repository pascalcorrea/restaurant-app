import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "../assets/logo/Diseño sin título (38).png"

function Header() {
  return (
    <header>
      <Navbar className="header-container bg-white" bg="light" expand="lg" collapseOnSelect>
        <Container className="space-between;">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="logo-header d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="toggle-button responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center justify-content-end">
            <Nav className="nav-menu">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/carta">Nuestra carta</Nav.Link>
              <Nav.Link href="/contacto">Contacto y ubicación</Nav.Link>
              <Nav.Link href="/reservar-hora">Reserva de mesa</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;


