import {Container, Form, Row, Col, Button} from 'react-bootstrap';

const CartScreen= ({match, location})=>{
    console.log(location.search)
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
                                <div>
                                    <Container className="p-3">
                                        <Row>
                                            <Col>
                                                <img class="w-50" src="https://via.placeholder.com/150"/>
                                            </Col>
                                            <Col className="">
                                                TITOLO
                                            </Col>
                                            <Col className="">
                                                <p>12</p>
                                            </Col>
                                            <Col className="">
                                                <p>12</p>
                                            </Col>
                                            <Col className="">
                                            <a>Remove</a>
                                            </Col>
                                        </Row>
                                    </Container>


                                 

                                    
                                </div>
                            </Container>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={5}>
                            <Container className="p-3 mb-5 mt-5 cart-div">
                                
                                <hr></hr>
                                <Row className="mb-3">
                                    <Col>
                                        Total
                                    </Col>
                                    <Col className="text-right mr-3">
                                        23
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