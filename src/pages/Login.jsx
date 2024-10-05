import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import CustomModal from "../Components/CustomModal";
import { useNavigate } from "react-router-dom";
import Colors from "../constants/Colors";
import { handleLogin } from "../services/auth";

function Login() {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setModalMessage("Please fill in all fields correctly.");
      setModalType("error");
      setShowModal(true);
    } else {
      event.preventDefault();
      handleLogin(
        formData,
        setLoading,
        setModalMessage,
        setModalType,
        setShowModal, // Ensure setShowModal is last
        navigate
      );
    }

    setValidated(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (modalType === "success") {
      navigate("/home"); // Only navigate to home on successful login
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: Colors.mainColor,
        position: "relative",
      }}
    >
      <div
        className="w-50 border rounded p-4 shadow"
        style={{ backgroundColor: "#fff", borderColor: Colors.mainColor }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2
            className="text-center"
            style={{ color: Colors.mainColor, fontWeight: 500 }}
          >
            Login
          </h2>
          <p
            className="text-center p-2 mb-4"
            style={{
              backgroundColor: Colors.secondaryColor,
              color: Colors.backgroundColorLightGray,
              borderRadius: 5,
            }}
          >
            Welcome back! Please login to your account.
          </p>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Button type="submit" className="w-100 mt-4" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <Button variant="success" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </p>
        </Form>

        {showModal && (
          <CustomModal
            type={modalType}
            title={modalType === "success" ? "Success" : "Error"}
            content={modalMessage}
            onClose={handleModalClose} // Navigate on modal close if success
          />
        )}
      </div>
    </div>
  );
}

export default Login;
