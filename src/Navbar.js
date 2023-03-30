import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Toolbar,
  AppBar,
  Box,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const linkStyle = {
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <>
      <AppBar position="relative" gutterBottom component="nav">
        <Toolbar>
          <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Box>
            <Button sx={{ color: "#fff" }}>
              <Link style={linkStyle} to="/">
                HOME
              </Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link style={linkStyle} to="/products">
                PRODUCTS
              </Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link style={linkStyle} to="/profile">
                PROFILE
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
