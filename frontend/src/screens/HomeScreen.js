import React from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import { Product } from '../components/Product';
import products from '../products';

const HomeScreen = () => {
    return (
        <>
            <Container className="text-center"><h1>Latest products</h1></Container>
            <Row>
                {
                    products.map((product)=>
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Product  product={product}/>
                    </Col>
                    )
                }
            </Row>
        </>
    )
}

export default HomeScreen
