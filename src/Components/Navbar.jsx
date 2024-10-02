import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import profileIcon from "../assets/profile.png";
import logoutIcon from "../assets/logout.png";
import { useState } from "react";
import { Typography } from "@mui/material";
import CustomButton from "./CustomButton";

const pages = ["Men Collection", "Women Collection", "About Us", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleEarnWithUsClick = () => {
    navigate("/earn");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fcedee" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              maxWidth: "150px",
            }}
          />

          {/* Menu icon for small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="success"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${page.toLowerCase().replace(" ", "")}`}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  onClick={handleEarnWithUsClick}
                  sx={{ color: "#db2b39", fontWeight: "bold" }}
                >
                  Earn With Us
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo for small screens */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 2,
              maxWidth: "100px",
            }}
          />

          {/* Nav links for large screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {pages.map(page => (
              <Link
                key={page}
                to={`/${page.toLowerCase().replace(" ", "")}`}
                style={{
                  color: "black",
                  textDecoration: "none",
                  margin: "10px 20px",
                }}
              >
                {page}
              </Link>
            ))}

            <CustomButton
              text="Earn With Us"
              height="40px"
              width="150px"
              backgroundColor="#dc3545"
              hoverBackgroundColor="#e4606d"
              color="white"
              onClick={handleEarnWithUsClick}
            />
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
            <Box
              component="img"
              src={cartIcon}
              alt="Cart"
              sx={{ width: 30, height: 30 }}
            />
            <Box
              component="img"
              src={profileIcon}
              alt="Profile"
              sx={{ width: 30, height: 30 }}
            />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={logoutIcon}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
