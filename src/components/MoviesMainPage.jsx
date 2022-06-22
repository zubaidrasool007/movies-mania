import React, { useEffect, useState } from "react";
import { useGetTopRatedByNameQuery } from "../service/services";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Rating,
  Container,
} from "@mui/material";
import "./Movies.css";
import { Link } from "react-router-dom";
import MoviesSearchData from "./MoviesSearchData";

export default function MoviesMainPage() {
  const { data, error, isLoading } = useGetTopRatedByNameQuery();

  console.log("main", data);

  if (isLoading) return "loading";

  return (
    <Box>
      <Container>
        <MoviesSearchData />
        <h1>Movies</h1>
        <Grid container>
          {data.results.map((moviesCast) => (
            <Grid item xs={3} p={1}>
              <Link className="link" to={`detail/${moviesCast.id}`}>
                <Card sx={{ height: "100%", width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="340"
                    image={"https://www.themoviedb.org/t/p/original/"+moviesCast.backdrop_path}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {moviesCast.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {moviesCast.release_date}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      <Rating
                        name="read-only"
                        value={moviesCast.vote_average / 2}
                        readOnly
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
