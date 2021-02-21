import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from '../components/Rating';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { productDetail } from './../actions/productActions';
import FormImpl from 'react-bootstrap/esm/Form';

const ProductScreen = ({history, match}) => {
    const dispatch=useDispatch();
    const getProductDetail = useSelector(state => state.productDetailReducer);
    const {product,loading} = getProductDetail;

    useEffect(() => {
        dispatch(productDetail(match.params.id));
    },[match,dispatch]);


    const [quantity, setQuantity]=useState(0);

    const addToCart=()=>{
        history.push(`/cart/${match.params.id}&quantity=${quantity}`);
    }

    return (
            <Container>
                <Link to='/'><motion.button whileHover={{ scale: 1.03 }} className="btn btn-light mb-3 mt-3 ml-3">Go back</motion.button></Link>
                {
                    (loading) ?
                        <p>Loading....</p>
                    :
                        <Row>
                            <Col lg={6}>
                                <Container className="mb-3">
                                    <img className="img-responsive" src={product.image}></img>
                                </Container>
                            </Col>
                            <Col lg={3}>
                                <Container>
                                    <h3>{product.name}</h3>
                                    <Rating value={product.rating} text={product.numReviews+" reviews"} />
                                    <p>Price: {product.price}</p>
                                    <hr/>
                                    <p>Description:</p>
                                    {product.description}
                                </Container>
                            </Col>
                            <Col lg={3}>
                                <Container>
                                    <Card className="my-3 p-3 rounded">
                                        <Card.Body>
                                            <p>Price: {product.price}</p>
                                            <p>In stock: {product.countInStock ? 'In stock' : 'Out of stock'}</p>
                                            <hr/>
                                            <Card.Text as="div">
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                        {product.countInStock > 0  ?
                                                            <ListGroup.Item>
                                                                <Row>
                                                                    <Col>
                                                                    Quantity
                                                                    </Col>
                                                                    <Col>
                                                                    <Form.Control as='select' value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                                                                        {[...Array(product.countInStock).keys()].map(key=>(
                                                                            <option value={key+1}>{key+1}</option>
                                                                        )

                                                                        )}
                                                                    </Form.Control>
                                                                    </Col>
                                                                </Row>

                                                            </ListGroup.Item>
                                                    
                                                        :
                                                            null
                                                        }
                                                        </Col>
                                                        
                                                    </Row>
                                                </Container>
                                                <Button onClick={addToCart} className="btn-block btn-bg-color-custom">Add to cart</Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Container>   
                            </Col>
                        </Row>
                }
            </Container>
    )
}

export default  ProductScreen;
