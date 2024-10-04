import { Modal } from "@mui/material";
import axiosInstance from "../utils/axiosInstance";
import Swal from "sweetalert2";
import CustomModal from "../Components/CustomModal";

// Register function
export const handleRegister = async (
  formData,
  setLoading,
  setModalMessage,
  setModalType,
  setShowModal,
  navigate
) => {
  try {
    setLoading(true);
    const response = await axiosInstance.post("/signup", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.success) {
      setModalMessage("Registration successful!");
      setModalType("success");
      setShowModal(true); // Open the modal on success
      navigate("/login"); // Optionally navigate after a delay
    } else {
      setModalMessage("Registration failed: " + response.data.message);
      setModalType("error");
      setShowModal(true); // Open the modal on error
    }
  } catch (error) {
    setModalMessage("An error occurred during registration");
    setModalType("error");
    setShowModal(true); // Open the modal on error
  } finally {
    setLoading(false);
  }
};

// Login function
export const handleLogin = async (
  formData,
  setLoading,
  setModalMessage,
  setModalType,
  navigate,
  setShowModal
) => {
  try {
    setLoading(true);
    // Send POST request for login
    const response = await axiosInstance.post("/loggering", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Log the full response to check its structure
    console.log("Full login response: ", response);

    // Access the response directly since it's not nested in response.data
    if (response && response.message === "Login successful") {
      <CustomModal
        type="success"
        title="Login Successful"
        content="You have successfully logged in."
        onClose={() => setShowModal(false)}
      />;
      console.log("Login successful: ", response);
      navigate("/home", { state: { user: response.fname } });
      localStorage.setItem("userId", response.userId);
    } else {
      setModalMessage(
        "Login failed: " + (response?.message || "Unknown error")
      );
      setModalType("error");
      setShowModal(true);
    }
  } catch (error) {
    console.error("Login Error:", error);
    if (error.response && error.response.status === 401) {
      <CustomModal
        type="error"
        title="Invalid Credentials"
        content="Please check your email and password."
        onClose={() => setShowModal(false)}
      />;
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Please check your email and password.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Server Error ",
        text: "Login failed",
      });
    }
  } finally {
    setLoading(false);
  }
};
