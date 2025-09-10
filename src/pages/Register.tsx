import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
    return (
        <>
            <div style={{ width: 350, height: 400, border: "1px solid black", boxShadow: " 2px 2px" }}>
                <Form>
                    <h3 style={{ textAlign: "center" }}>Create accout</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="name@company.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="........" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="........" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ width: "100%" }}>
                        Login an account
                    </Button>
                    <div>Already have an account? <a href="">Login here</a></div>
                </Form>
            </div>

        </>
    )
}
