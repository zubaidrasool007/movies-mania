import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Menu,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Movies.css";
import SearchBar from "./SearchBar";
export default function Navbar() {
  const [anchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  return (
    <Box className="container">
      <AppBar>
        <Toolbar sx={{ backgroundColor: "#0e2541" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textDecoration: "none",
                  width: "150px",
                  maxWidth: "100%",
                }}
              >
                <Button sx={{ fontWeight: "600", color: "#fff" }} id="home-button" onClick={() => {navigate('')}}>Movies Maniya</Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  sx={{ fontWeight: "600", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  Movies
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                ></Menu>
                <Button
                  sx={{ fontWeight: "600", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  Tv Shows
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                ></Menu>
                <Button
                  sx={{ fontWeight: "600", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  // onMouseOver={handleClick}
                >
                  People
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                ></Menu>
                <Button
                  sx={{ fontWeight: "600", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  More
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                ></Menu>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Join US</Button>
              {/* searchbar component */}
              <SearchBar />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
