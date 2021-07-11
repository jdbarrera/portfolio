import logo from '../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = () => {

    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                    <NavDropdown.Item href="">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
    
}

export default Header;
