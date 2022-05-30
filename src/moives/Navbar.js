import React, { useEffect, useState } from 'react'
import { Box, AppBar, Toolbar, ListItem, ListItemButton, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import './Movies.css';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const [search, setSearch] = useState(true)
  const [searchData, setSearchData] = useState([])
  const navigation = useNavigate()
  const [input, setInput] = useState('a')
  const serachBox = () => {
    setSearch(!search)
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&query=${input}&page=2&include_adult=false`).then(response => {
      return response.json()
    }).then(value => {
      setSearchData(value.results)
    })
  }, [input])
  const searchItem = (data) => {
    console.log('i', data)
    navigation(`detail/${data.id}`)
  }
  return (
    <Box className='container' >
      <AppBar>
        <Toolbar className='bar' >
          <Box className='main'>
            <Box className='list'>

              <ListItem >
                <Box sx={{
                  textDecoration: "none",
                  width: '150px',
                  maxWidth: '100%',
                }}>
                  <img src=' https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                </Box>
                <ListItemButton>
                  Movies
                </ListItemButton>
                <ListItemButton>
                  TvShows
                </ListItemButton>
                <ListItemButton>
                  People
                </ListItemButton>
                <ListItemButton>
                  More
                </ListItemButton>
              </ListItem>
            </Box>
            <Box className='btn' >
              <Button color="inherit" ><AddIcon sx={{ fontSize: '30px' }} /></Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">JoinTMDB</Button>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300 }}
                disableClearable
                options={searchData}
                getOptionLabel={(data) => data.title}
                onChange={(event, value) => searchItem(value)}
                renderInput={(params) => (
                  <TextField className="search"
                    {...params}
                    label="Search input"
                    type='search'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                )}
              />
              <Button color="inherit">{search ? <SearchIcon /> : <CloseIcon />}</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};




