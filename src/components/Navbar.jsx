import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  useMediaQuery,
  Divider,
  Drawer,
} from "@mui/material";
import { MenuBar } from "./MenuBar";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Movies.css";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { menuItems } from "../constants";

const drawerWidth = 240;
const navItems = ["Movies", "TvShows", "People", "More"];
export default function Navbar(props) {
  const matches = useMediaQuery("(min-width: 900px)");
  const [isShow, setIsShow] = useState(true);
  const { window } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [items, setItems] = useState([]);

  // find the menuesItem id
  const handleClick = (event) => {
    const filteredItems = menuItems.filter(
      (menu) => menu.id === event.target.id
    )[0].items;
    setItems(filteredItems);
    setAnchorEl(event.currentTarget);
  };
  // close the menusItem
  const handleClose = () => {
    setAnchorEl(null);
  };

  //this function for hide input field
  const showInput = () => {
    setIsShow(!isShow);
  };
  // function is use tho open the drawer
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  // set a Drawer
  const drawerData = (
    <Grid onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, fontWeight: "700", fontSize: "23px" }}>
        Movies
      </Typography>
      <Divider />
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        gap={4}
      >
        {navItems.map((item) => (
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            {item}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid className="container">
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#0e2541" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {matches ? (
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    textDecoration: "none",
                    width: "150px",
                    maxWidth: "100%",
                  }}
                >
                  <Typography variant="h6">Movies Mania</Typography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    id="menu-btn-1"
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    sx={{
                      color: "white",
                    }}
                  >
                    Movies
                  </Button>
                  <Button
                    id="menu-btn-2"
                    aria-owns={anchorEl ? "simple-menu-2" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    sx={{
                      color: "white",
                    }}
                  >
                    TV Shows
                  </Button>

                  <Button
                    id="menu-btn-3"
                    aria-owns={anchorEl ? "simple-menu-3" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    sx={{
                      color: "white",
                    }}
                  >
                    People
                  </Button>

                  <MenuBar
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    items={items}
                  />

                  <Button
                    id="menu-btn-4"
                    aria-owns={anchorEl ? "simple-menu-4" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    sx={{
                      color: "white",
                    }}
                  >
                    More
                  </Button>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Button color="inherit">Login</Button>
              <Button color="inherit">JoinTMDB</Button>
              <Button onClick={showInput}>
                {isShow ? <SearchIcon /> : <CloseIcon />}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        {isShow ? "" : <SearchBar />}
      </AppBar>
      <Grid component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={openDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerData}
        </Drawer>
      </Grid>
    </Grid>
  );
}
