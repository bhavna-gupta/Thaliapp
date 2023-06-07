import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
function Footer() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">@copyright 2023</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;

