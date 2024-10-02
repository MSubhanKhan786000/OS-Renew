import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";  // Import your logo
import cartIcon from "../assets/cart.png";  // Import cart icon
import profileIcon from "../assets/profile.png";  // Import profile icon
import logoutIcon from "../assets/logout.png";  // Import logout icon
import { useState } from 'react';

const pages = ['Men Collection', 'Women Collection', 'About Us', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleEarnWithUsClick = () => {
    navigate('/earn');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, maxWidth: '150px' }}
          />
          
          {/* Menu icon for small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase().replace(' ', '')}`} style={{ textDecoration: 'none', color: '#000000' }}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  onClick={handleEarnWithUsClick}
                  sx={{ color: '#db2b39', fontWeight: 'bold' }}
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
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 2, maxWidth: '100px' }}
          />

          {/* Nav links for large screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', textDecoration: 'none' }}
              >
                <Link to={`/${page.toLowerCase().replace(' ', '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {page}
                </Link>
              </Button>
            ))}
            <Button
              onClick={handleEarnWithUsClick}
              sx={{ my: 2, color: '#f79d65', fontWeight: 'bold', display: 'block' }}
            >
              Earn With Us
            </Button>
          </Box>

          {/* User icons and avatar */}
          <Box sx={{ flexGrow: 0, display: 'flex', gap: 2 }}>
            <Box component="img" src={cartIcon} alt="Cart" sx={{ width: 20, height:20 }} />
            <Box component="img" src={profileIcon} alt="Profile" sx={{ width: 20, height:20 }} />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,width: 20, height:20 }}>
                <Avatar alt="Remy Sharp" src={logoutIcon} sx={{width:20,height:20}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
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
