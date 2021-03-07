import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserView } from "react-device-detect";
import { LinkContainer} from 'react-router-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from './../actions/userActions';

const Header = ({history}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems}= cart;
    const userLogin = useSelector(state => state.userInfo);
    const {loading, error, user} =userLogin;
    const dispatch = useDispatch();

    function logoutHandler(){
        dispatch(logout());
        console.log(history);
        //history.push('/');
    }

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
                                <div className="d-none d-lg-block">
                                    <div>
                                    <LinkContainer to="/cart">
                                        <Nav.Link className="position-relative d-inline-flex"><i className="fas fa-shopping-cart"></i>
                                            {
                                                (cartItems.length>0) 
                                                ?
                                                <span className="cart-basket d-flex align-items-center justify-content-center">{cartItems.length}</span>
                                                :                                   
                                                null
                                            }
                                        </Nav.Link>
                                    </LinkContainer>
                                    
                                    
                                    {
                                        (user) ? (
                                            
                                            <NavDropdown title={user.name} className="d-inline-flex" id="basic-nav-dropdown">
                                            <LinkContainer to="/profile">
                                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                            </LinkContainer>

                                            
                                            
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={()=>{logoutHandler()}}>Logout</NavDropdown.Item>

                                          </NavDropdown>)
                                        :
                                            (
                                        <LinkContainer to="/login">
                                            <Nav.Link className="d-inline-flex"><i className="fas fa-user"></i>
                                            </Nav.Link>
                                        </LinkContainer>)
                                    }
                                    
                                </div>
                                </div>
                                <div className="d-block d-lg-none">
                                    <LinkContainer to="/cart">
                                        <Nav.Link>Cart <i className="fas fa-shopping-cart"></i>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/login">
                                        <Nav.Link>Login <i className="fas fa-user"></i>
                                        </Nav.Link>
                                    </LinkContainer>
                                </div>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </BrowserView>
            
        </header>
    )
}
export default Header;
//rafce