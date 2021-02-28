import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../actions/cartActions.js'
import CartItem from '../components/CartItem.js'

const CartScreen= ({match, location, history})=>{
    const productId=match.params.id;
    const quantity= location.search ? Number(location.search.split('=')[1]) : 1;
    const cart = useSelector(state => state.cart);
    const {cartItems}= cart;

    const dispatch=useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,quantity))
        }
        
    }, [])
    return(
        <>
            <Container>
                <Row>
                        <Col sm={12} md={12} lg={6} xl={7}>
                            <Container>
                                <h1 className="mb-4">Your cart</h1>
                                <Container className="border-bottom p-2 mb-4">
                                        <Row>
                                            <Col>
                                            </Col>
                                            <Col className="">
                                                <b>Name</b>
                                            </Col>
                                            <Col className="">
                                                <b>Price</b>
                                            </Col>
                                            <Col className="">
                                                <b>Quantity</b>
                                            </Col>
                                            <Col className="">
                                            
                                            </Col>
                                        </Row>
                                    </Container>
                                {
                                    cartItems.map((item)=>{ 
                                        return(
                                            <CartItem key={item.product} item={item}></CartItem>
                                       )                            
                                    })
                                }
                            </Container>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={5} className="mt-5">
                            <Container className="p-3 mb-5 mt-5 cart-div">
                                <h4>Subtotal for ({cartItems.length}) items</h4>
                                <Row className="mb-3">
                                    <Col>
                                        Subtotal:
                                    </Col>
                                    <Col className="text-right mr-3">
                                        $ {cartItems.reduce((acc,item)=>acc + item.quantity * item.price, 0).toFixed(2)}
                                    </Col>
                                </Row>
                                <Button className="btn-block btn-bg-color-custom">Go to checkout</Button>

                            </Container>
                        </Col>
                    </Row>
                </Container>
            
        
        
        </>
    )
}


export default CartScreen;