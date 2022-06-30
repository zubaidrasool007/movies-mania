import React from "react";
import { useParams } from "react-router";
import { useGetSimilarMoviesByNameQuery } from "../service/services";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

export default function SimilarMoviesPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSimilarMoviesByNameQuery(id);

  if (isLoading) return "loading...";
  return (
    <Container>
      <h1>Similar Movies</h1>
      <Grid container sx={{ flexWrap: "nowrap", overflowX: "scroll" }}>
        {data.results.map((similarMovies) => (
          <Grid item p={1}>
            <Link className="link" to={`/detail/${similarMovies.id}`}>
              <Card sx={{ height: "100%", width: "200px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="190"
                  image={`https://www.themoviedb.org/t/p/original/${similarMovies.backdrop_path}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {similarMovies.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {similarMovies.release_date}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
