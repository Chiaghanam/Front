import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaOpencart } from "react-icons/fa6";
import { RiHome3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark top-0 position-sticky opacity-100 w-100">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>EShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} ><RiHome3Fill />Home </Nav.Link>
            <Nav.Link as={Link} to={'/Cart'}> <FaOpencart  />Cart </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1" className='text-dark'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='text-dark'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-dark'>Something</NavDropdown.Item>
              <NavDropdown.Divider className='bg-dark'/>
              <NavDropdown.Item href="#action/3.4" className='text-dark'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
