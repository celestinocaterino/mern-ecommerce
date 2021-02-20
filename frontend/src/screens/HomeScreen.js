import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Container, Col} from 'react-bootstrap';
import { Product } from '../components/Product';
import {productList} from './../actions/productActions';

const HomeScreen = () => {
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(productList());
    },[dispatch]);

    const productsList=useSelector((state)=>state.productList);
    const {loading, error, products}=productsList;

    return (
        <>
            <h1>Latest products</h1>
            {loading ? <h2>Loading...</h2> : error ?<h3>{error}</h3> :
            <Container>
                <Row>
                    {
                        products.map((product)=>
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                            <Product  product={product}/>
                        </Col>
                        )
                    }
                </Row>
            </Container>}
            
        </>
    )
}
export default HomeScreen;
