import React, {useEffect} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Rating } from '../components/Rating'
import { motion } from "framer-motion"
import {useDispatch, useSelector} from 'react-redux'
import {productDetail} from './../actions/productActions'

const ProductScreen = ({match}) => {
    const dispatch=useDispatch()

    useEffect(() => {

        dispatch(productDetail(match.params.id))
       
    },[match,dispatch])

    const getproduct = useSelector(state => state.productDetailReducer)

    const {product} = getproduct
    return (
        <div>
            <Container>
            <Link to='/'><motion.button whileHover={{ scale: 1.03 }} className="btn btn-light mb-3 mt-3 ml-3">Go back</motion.button></Link>

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
                <hr></hr>
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
                        <hr></hr>
                        <Card.Text as="div">
                            <Button className="btn-block btn-bg-color-custom">Add to cart</Button>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Container>   

                    
                </Col>
                
                
                
                
            </Row>
            </Container>
        </div>
    )
}
export default  ProductScreen;
