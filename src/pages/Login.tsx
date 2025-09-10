import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <>
            <div style={{ width: 350, height: 300, border: "1px solid black", boxShadow: " 2px 2px" }}>
                <Form>
                    <h3 style={{ textAlign: "center" }}>Login account</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="name@company.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="........" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ width: "100%" }}>
                        Login an account
                    </Button>
                    <div>Already have an account? <a href="">Register here</a></div>
                </Form>
            </div>

        </>
    )
}
