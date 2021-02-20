import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Rating } from '../components/Rating';
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import {productDetail} from './../actions/productActions';

const ProductScreen = ({match}) => {
    const dispatch=useDispatch();
    const productDetail = useSelector(state => state.productDetailReducer);
    const [counter, setCounter] = useState(1);
    const {product,loading} = productDetail;

    useEffect(() => {
        dispatch(productDetail(match.params.id));
    },[match,dispatch]);

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
                                                        <Col lg={3}>
                                                            <Button className="btn-block btn-bg-color-custom">-</Button>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <Form.Control type="text" value={counter} className="mb-2" />
                                                        </Col>
                                                        <Col lg={3}>
                                                            <Button className="btn-block btn-bg-color-custom">+</Button>                                
                                                        </Col>
                                                    </Row>
                                                </Container>
                                                <Button className="btn-block btn-bg-color-custom">Add to cart</Button>
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
