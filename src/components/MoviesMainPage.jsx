import React from "react";
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
  const { data, isLoading } = useGetTopRatedByNameQuery();

  if (isLoading) return "loading...";

  return (
    <Box>
      <Container>
        <MoviesSearchData />
        <h1>Movies</h1>
        <Grid container>
          {data.results.map((mainMovies) => (
            <Grid item xs={3} p={1}>
              <Link className="link" to={`detail/${mainMovies.id}`}>
                <Card sx={{ height: "100%", width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt={mainMovies.title}
                    height="340"
                    image={`https://www.themoviedb.org/t/p/original/${mainMovies.backdrop_path}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {mainMovies.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mainMovies.release_date}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      <Rating
                        name="read-only"
                        value={mainMovies.vote_average / 2}
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
