import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {login} from './../actions/userActions';

const LoginScreen = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userInfo);
    const {loading, error, user} =userLogin;

    const submithandler= (e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }

    return (
        <>
        <Row>
            <Col>
                <Container className="w-50 p-3">
                    <h3 className="mb-4">Login</h3>
                    {(error) ? <p>{error}</p> : null}
                    <Form onSubmit={submithandler}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <div className="text-right">
                        <Button type="submit" className="btn-bg-color-custom">Login</Button>

                        </div>

                    </Form>
                </Container>
            </Col>
        </Row>
            
        </>
    )
}

export default LoginScreen;
