import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { BrowserView } from "react-device-detect";
import { LinkContainer} from 'react-router-bootstrap';

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
                            <LinkContainer to="/cart">
                                <Nav.Link className="position-relative d-inline-flex"><i className="fas fa-shopping-cart"></i>
                                <span class="cart-basket d-flex align-items-center justify-content-center">
            0
          </span>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link className="d-inline-flex"><i class="fas fa-user"></i>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </BrowserView>
            
        </header>
    )
}
export default Header;
//rafce