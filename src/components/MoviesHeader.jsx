import React from "react";
import { useNavigate } from "react-router";
import { useGetSerchMoviesByNameQuery } from "../service/services";
import { Grid, TextField, Autocomplete, Typography } from "@mui/material";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function MoviesHeader() {
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
    <Grid
      sx={{
        background: `url('https://culturalpolitics.net/index/sites/default/files/inline-images/Abm0wRq.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "centers",
        color: " #fff",
        position: "relative",
        zIndex: "1",
        p: { xs: "20px", sm: "50px" },
      }}
    >
      <Grid
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "black",
          opacity: { xs: "0.6", sm: "0.5" },
          zIndex: "-1",
        }}
      ></Grid>
      <Grid>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "32px" },
            fontWeight: { xs: "500", sm: "600" },
          }}
          variant="h4"
        >
          Welcome.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "32px" },
            fontWeight: { xs: "500", sm: "600" },
            mb: 5,
          }}
          variant="h4"
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
      </Grid>
      <Grid>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          size="small"
          // sx={{ width: "100%", border: "none" }}
          disableClearable
          options={data?.results || []}
          getOptionLabel={(v) => v.title}
          onChange={(event, value) => searchItem(value)}
          renderInput={(params) => (
            <TextField
              sx={{ backgroundColor: "white" }}
              {...params}
              label="Search input"
              type="search"
              onChange={(e) => setInput(e.target.value)}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
