import {Container, Form, Row, Col, Button} from 'react-bootstrap';

const LoginScreen = () => {
    return (
        <>
        <Row>
            <Col>
                <Container className="w-50 p-3">
                    <h3 className="mb-4">Login</h3>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Container className="text-right">
                        <Button className="btn-bg-color-custom">Login</Button>

                        </Container>

                    </Form>
                </Container>
            </Col>
        </Row>
            
        </>
    )
}

export default LoginScreen;
