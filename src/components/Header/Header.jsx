import React from 'react';
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgShoppingCart } from "react-icons/cg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const thali = useSelector(state => state.counter.thali);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Thali App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> <Link to="/" >Home</Link></Nav.Link>
            <Nav.Link> <Link to="/about">About</Link></Nav.Link>
            <Nav.Link> <Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
          <div className="right">
          <Nav.Link> <Link to="/thali">
          <span className="cart-icon">
                     <CgShoppingCart />
                        <span className='cart-count'>{thali.length}</span>
                </span>
            </Link></Nav.Link>
                
         </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

