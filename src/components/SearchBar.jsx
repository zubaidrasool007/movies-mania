import React from "react";
import { useNavigate } from "react-router";
import { useGetSerchMoviesByNameQuery } from "../service/services";
import { Grid, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function SearchBar() {
  const navigation = useNavigate();
  const [input, setInput] = useState("a");
  const { data, error, isLoading } = useGetSerchMoviesByNameQuery(input);
  if (isLoading)
    return (
      <Grid
        container
        alignItems={"center"}
        height={"100vh"}
        justifyContent={"center"}
      >
        <CircularProgress />
      </Grid>
    );
  const searchItem = (data) => {
    navigation(`detail/${data.id}`);
  };
  return (
    <Grid>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        size="small"
        sx={{ width: "100%" }}
        disableClearable
        options={data.results}
        getOptionLabel={(v) => v.title}
        onChange={(event, value) => searchItem(value)}
        renderInput={(params) => (
          <TextField
            sx={{ backgroundColor: "white" }}
            {...params}
            type="search"
            placeholder="Search Movies"
            onChange={(e) => setInput(e.target.value)}
          />
        )}
      />
    </Grid>
  );
}
