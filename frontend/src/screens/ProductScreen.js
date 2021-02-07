import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import products from '../products'
import { Rating } from '../components/Rating'

const ProductScreen = ({match}) => {
    const product=products.find(p=> p._id === match.params.id);
    return (
        <div>
            <Container>
            <Link className="btn btn-light mb-3 mt-3 ml-3" to='/'>Go back</Link>

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
