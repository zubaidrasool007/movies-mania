import React from "react";
import { useParams } from "react-router";
import { useGetSimilarMoviesByNameQuery } from "../service/services";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

export const SimilarMoviesPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSimilarMoviesByNameQuery(id);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
  // if (isLoading) return "ffff";
  if (error) return "something wrong";

  return (
    <Container>
      <h1>Similar Movies</h1>
      <Grid container sx={{ flexWrap: "nowrap", overflowX: "scroll" }}>
        {data.results.map((similarMovies) => (
          <Grid item p={1}>
            <Link
              className="link"
              to={`/detail/${similarMovies.id}`}
              onClick={goToTop}
            >
              {isLoading ? (
                <Grid
                  container
                  alignItems={"center"}
                  height={"100vh"}
                  justifyContent={"center"}
                  position={"absolute"}
                  zIndex={"11"}
                >
                  <CircularProgress />
                </Grid>
              ) : (
                <Card
                  sx={{
                    height: "100%",
                    width: "200px",
                    boxShadow: "none",
                  }}
                >
                  <Grid>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      width="100%"
                      height="270px"
                      sx={{ borderRadius: "10px" }}
                      image={`https://www.themoviedb.org/t/p/original/${similarMovies.backdrop_path}`}
                    />
                  </Grid>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {similarMovies.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {similarMovies.release_date}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
