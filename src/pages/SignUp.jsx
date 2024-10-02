import React, { useState, useRef } from "react";
import "../Styles/Form.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

function SignUp() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const confirmationError = useRef(null);
  const progressBar = useRef(null);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || password !== confirmation) {
      event.preventDefault();
      event.stopPropagation();
      confirmationError.current.style.display =
        password !== confirmation ? "block" : "none";
    } else {
      confirmationError.current.style.display = "none";
    }
    setValidated(true);
  };

  const handlePasswordChange = password => {
    setPassword(password);
    const letterMatch = (password.match(/[a-zA-Z]/g) || []).length;
    const numberMatch = (password.match(/[0-9]/g) || []).length;
    const specialMatch = (password.match(/[#?!@$%^&*-]/g) || []).length;

    const strength = letterMatch + numberMatch * 2 + specialMatch * 3;
    progressBar.current.style.width = `${strength * 3}%`;
    let color = "red";
    if (strength > 10) {
      color = "orange";
    }
    if (strength > 26) {
      color = "green";
    }
    progressBar.current.style.backgroundColor = color;
  };

  return (
    <div className="form-wrapper">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Container fluid>
          <h2 className="form-title">Sign up a new user</h2>
          <Row>
            {/* First Name and Last Name */}
            <Col sm={6}>
              <FloatingLabel
                controlId="firstNameLabel"
                label="First name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="First name" required />
              </FloatingLabel>
            </Col>
            <Col sm={6}>
              <FloatingLabel
                controlId="lastNameLabel"
                label="Last name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Last name" required />
              </FloatingLabel>
            </Col>
          </Row>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel controlId="emailLabel" label="Enter email">
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
              />
            </FloatingLabel>
            <Form.Text className="text-muted">
              We'll (hopefully) never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {/* Password */}
          <FloatingLabel
            controlId="passwordLabel"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              required
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              onChange={e => handlePasswordChange(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="confirmPasswordLabel"
            label="Confirmation"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Confirmation"
              required
              onChange={e => setConfirmation(e.target.value)}
            />
          </FloatingLabel>

          <p style={{ color: "red", display: "none" }} ref={confirmationError}>
            Password and confirmation are not the same
          </p>

          <Button type="submit">Register</Button>
        </Container>
      </Form>
    </div>
  );
}

export default SignUp;
