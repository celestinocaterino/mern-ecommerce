import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeToCart} from '../actions/cartActions.js'

const CartItem = ({item}) => {
    const product = useSelector(state => state.state);
    const dispatch = useDispatch();

    return (
        <Container className="p-3">
            <Row>
                <Col>
                    <img className="w-100" src={item.image}/>
                </Col>
                <Col className="">
                    {item.name}
                </Col>
                <Col className="">
                    <p>{item.price}</p>
                </Col>
                <Col className="">
                    {item.countInStock > 0  ?
                                                             
                                                                    <Form.Control as='select' value={item.quantity} onChange={(e)=>{dispatch(addToCart(item.product, Number(e.target.value)))}}>
                                                                        {[...Array(item.countInStock).keys()].map(key=>(
                                                                            <option value={key+1}>{key+1}</option>
                                                                        )

                                                                        )}
                                                                    </Form.Control>
                                                                    

                                                    
                                                        :
                                                            null
                        }
                </Col>
                <Col className="">
                    <i className="fas fa-trash" onClick={()=>{dispatch(removeToCart(item.product))}} style={{cursor:'pointer'}}></i>

                </Col>
            </Row>
        </Container>
    )
}

export default CartItem
