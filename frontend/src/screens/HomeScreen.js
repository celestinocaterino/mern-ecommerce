import React, {useState, useEffect} from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import { Product } from '../components/Product';
import axios from 'axios';
const HomeScreen = () => {
    const [products,setProducts]=useState([]);
    useEffect(() => {
        const fetchProducts=async ()=>{
            const {data} = await axios.get('http://localhost:500/api/products/');
            setProducts(data);
        }
        fetchProducts();
    },[])
    return (
        <>
            <Container>
            <h1>Latest products</h1>
                <Row>
                    {
                        products.map((product)=>
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                            <Product  product={product}/>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

export default HomeScreen
