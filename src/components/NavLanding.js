import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import LogoSB from '../assets/image/LogoSB.png';

const MyNavbar = () => {
  const navbarBrandStyle = {
    fontWeight: 'bold',
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/" style={navbarBrandStyle}>
          <img src={LogoSB} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          {' ARSY HOSPITAL'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/registrasi">Registrasi</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
