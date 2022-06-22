import React from "react";
import { useNavigate } from "react-router";
import { useGetSerchMoviesByNameQuery } from "../service/services";
import { Box, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";

export default function MoviesSearchData() {
  const navigation = useNavigate();
  const [input, setInput] = useState("a");
  const { data, error, isLoading } = useGetSerchMoviesByNameQuery(input);
  if (isLoading) return "loading";
  // if (error) return "error";
  const searchItem = (data) => {
    navigation(`detail/${data.id}`);
  };
  return (
    <Box
      className="serchBox"
      sx={{
        background: `url('https://c4.wallpaperflare.com/wallpaper/365/431/599/movie-dracula-untold-wallpaper-preview.jpg')`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPositionY:'centers',
        color:'#fff'
      }}
    >
      <Box>
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          size='small'
          sx={{ width:'100%',border:'none'}}
          disableClearable
          options={data?.results ||[]}
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
    </Box>
  );
}
