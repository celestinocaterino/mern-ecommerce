import {Navbar, Nav, Container} from 'react-bootstrap';
import {BrowserView,} from "react-device-detect";
import { LinkContainer} from 'react-router-bootstrap' 

const Header = () => {
    return (
        <header>
            <BrowserView>
                <Navbar className="bd-navbar text-light navbar-dark fixed-top" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <LinkContainer to="/">
                    <Navbar.Brand>E-commerce</Navbar.Brand>
                    
                    </LinkContainer>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-5">
                        <LinkContainer to="cart">

                            <Nav.Link>Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="signin">
                            <Nav.Link>Sign in <i className="fas fa-sign-in-alt ml-1"></i></Nav.Link>

                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </BrowserView>
            
        </header>
    )
}
export default Header
//rafce