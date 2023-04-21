import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "../assets/logo//Diseño sin título (37).png"

function Header() {
    return (
      <header>
        <Navbar bg="light" expand="md" className="header-container">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={Logo}
                width="30"
                height="30"
                className="logo-header d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="">
              <Nav className="nav-menu">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/carta">Carta</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                <Nav.Link href="/ubicacion">Ubicación</Nav.Link>
                <Nav.Link href="/reservar-hora">Reservar Mesa</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
  
  export default Header;