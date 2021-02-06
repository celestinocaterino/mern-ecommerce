import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
const Header = () => {
    return (
        <header>
            <div className="d-none d-lg-block d-xl-block">
                <Navbar className="bd-navbar text-light navbar-dark fixed-top" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-5">
                            <Nav.Link href="#home">Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
                            <Nav.Link href="#link">Sign in <i className="fas fa-sign-in-alt ml-1"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="d-lg-none d-xl-none">
                header mobile
            </div>
        </header>
    )
}

export default Header
//rafce