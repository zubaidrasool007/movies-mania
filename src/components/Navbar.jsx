import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  ListItem,
  ListItemButton,
  Button,
  Typography,
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
              <Typography variant="h6">Movies Mania</Typography>
                
                </Box>
                <ListItemButton sx={{fontWeight:'600'}}>Movies</ListItemButton>
                <ListItemButton sx={{fontWeight:'600'}}>TvShows</ListItemButton>
                <ListItemButton sx={{fontWeight:'600'}}>People</ListItemButton>
                <ListItemButton sx={{fontWeight:'600'}}>More</ListItemButton>
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
