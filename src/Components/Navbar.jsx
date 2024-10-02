import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/main.css";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import profileIcon from "../assets/profile.png";
import logoutIcon from "../assets/logout.png";
import CustomButton from './CustomButton';
import { fetchProducts } from '../services/productService'; // Import the fetchProducts function
import { useQuery } from "@tanstack/react-query";


function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleEarnWithUsClick = () => {
    navigate('/earn'); 
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['products'], // This replaces the previous array form
    queryFn: fetchProducts, // This replaces the previous fetch function directly
  });

  // console.log(JSON.stringify(data,null,2));
  

  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <a href="/#">Men Collection</a>
        <a href="/#">Women Collection</a>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <CustomButton 
          height="40px" 
          width="150px" 
          text="Earn With Us" 
          onClick={handleEarnWithUsClick} 
        />
        <div className="navbar-icons" style={{ marginLeft: "5rem", gap: 20 }}>
          <img src={cartIcon} alt="Cart" className="icon cart-icon" />
          <img src={profileIcon} alt="Profile" className="icon profile-icon" />
          <img src={logoutIcon} alt="Logout" className="icon logout-icon" />
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
