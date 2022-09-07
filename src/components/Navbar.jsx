import { useState } from "react";
import {
  Grid,
  Typography,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "../shared/Drawer";
import { SearchBar } from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import { menuItems } from "../constants";
import { MenuBar } from "./MenuBar";
const navItems = ["Movies", "TvShows", "People", "More"];
export const Navbar = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerMatches = useMediaQuery("(max-width: 600px)");

  const matches = useMediaQuery("(min-width: 900px)");
  const [isShow, setIsShow] = useState(true);

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
  // const handleDrawerToggle = () => {
  //   setOpenDrawer(!openDrawer);
  // };

  return (
    <Grid>
      <Grid
        container
        alignItems="center"
        sx={{
          backgroundColor: "#0e2541",
          px: { xs: 2, md: 10 },
          py: 1.5,
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          {drawerMatches && (
            <Grid item>
              <Drawer
                open={openDrawer}
                closeDrawer={() => setOpenDrawer(false)}
              >
                <Grid
                  container
                  item
                  direction="column"
                  xs={12}
                  sx={{
                    width: "265px",
                    backgroundColor: "#0e2541",
                  }}
                >
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      mt: 1,
                    }}
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
              </Drawer>

              <Grid item>
                <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
                  {openDrawer ? (
                    <IconButton onClick={() => setOpenDrawer(false)}>
                      <CloseIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => setOpenDrawer(true)}>
                      <MenuIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: { sm: 0, md: "100%" },
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
                <Typography variant="h6" color={"#fff"}>
                  Movies Mania
                </Typography>
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
                    cursor: "pointer",
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
                    cursor: "pointer",
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
                    cursor: "pointer",
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
                    cursor: "pointer",
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
            <Button sx={{ color: "#fff" }} color="inherit">
              Login
            </Button>
            <Button sx={{ color: "#fff" }}>JoinTMDB</Button>
            <Button onClick={showInput}>
              {isShow ? <SearchIcon /> : <CloseIcon />}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid>{isShow ? "" : <SearchBar />}</Grid>
    </Grid>
  );
};
