import React from 'react'
import { useNavigate } from "react-router";
import { useGetSerchMoviesByNameQuery } from "../service/services";
import {
    Box,
    TextField,
    Autocomplete,
  } from "@mui/material";
  import { useState } from 'react';

export default function SearchBar() {
    const navigation = useNavigate();
    const [input, setInput] = useState("a");
    const { data, error, isLoading } = useGetSerchMoviesByNameQuery(input);
    if (isLoading) return "loading";
    if (error) return "error"
    const searchItem = (data) => {
      navigation(`detail/${data.id}`);
    };
  return (
    <Box>
         <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                sx={{ width: 300 , }}
                disableClearable
                options={data.results}
                getOptionLabel={(v) => v.title}
                onChange={(event, value) => searchItem(value)}
                renderInput={(params) => (
                  <TextField
                  sx={{backgroundColor:'white' ,}}
                    {...params}
                    label="Search input"
                    type="search"
                    // value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                )}
              />
  
    </Box>
  )
}
