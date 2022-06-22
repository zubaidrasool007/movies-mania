import React from "react";
import { Box, AppBar, Toolbar, Button, Typography, Link ,Menu,MenuItem} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./Movies.css";
import SearchBar from "./SearchBar";
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cindex,setIndex]=React.useState(0);
  const open = Boolean(anchorEl) && cindex ;
  const handleClick =(index)=> (event) => {
    setAnchorEl(event.currentTarget);
    setIndex(index)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <Typography variant="h6">Movies Mania</Typography>
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
                 sx={{ fontWeight: "600", color: "#fff", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onMouseOver={handleClick}
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
                >
                
                </Menu>
                <Button
                 sx={{ fontWeight: "600", color: "#fff", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onMouseOver={handleClick}
                >
                      TvShows
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
                >
              
                </Menu>
                <Button
                 sx={{ fontWeight: "600", color: "#fff", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onMouseOver={handleClick}
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
                >
              
                </Menu>
                <Button
                 sx={{ fontWeight: "600", color: "#fff", color: "#fff" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onMouseOver={handleClick}
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
                >
                </Menu>

                {/* <Link
                  href="#"
                  underline="none"
                  sx={{ fontWeight: "600", color: "#fff", color: "#fff" }}
                >
                  Movies
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontWeight: "600", color: "#fff" }}
                >
                  TvShows
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontWeight: "600", color: "#fff" }}
                >
                  People
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontWeight: "600", color: "#fff" }}
                >
                  More
                </Link> */}
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button color="inherit">
                <AddIcon sx={{ fontSize: "30px" }} />
              </Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">JoinTMDB</Button>
              {/* searchbar component */}
              <SearchBar />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
