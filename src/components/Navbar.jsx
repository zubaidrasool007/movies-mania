import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  ListItem,
  ListItemButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./Movies.css";
import SearchBar from "./SearchBar";
export default function Navbar() {

 
  return (
    <Box className="container" >
      <AppBar>
        <Toolbar sx={{backgroundColor:'#0e2541' }}>
          <Box  sx={{display:'flex',flexDirection:'row',justifyContent:'space-around' ,width:'100%'}}>
            <Box >
              <ListItem>
                <Box
                  sx={{
                    textDecoration: "none",
                    width: "150px",
                    maxWidth: "100%",
                  }}
                >
                  <img src=" https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
                  
                </Box>
                <ListItemButton>Movies</ListItemButton>
                <ListItemButton>TvShows</ListItemButton>
                <ListItemButton>People</ListItemButton>
                <ListItemButton>More</ListItemButton>
              </ListItem>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center'}}>
              <Button color="inherit">
                <AddIcon sx={{ fontSize: "30px" }} />
              </Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">JoinTMDB</Button>
              {/* searchbar component */}
              <SearchBar/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
