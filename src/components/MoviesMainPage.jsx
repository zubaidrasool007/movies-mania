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
import CircularProgress from "@mui/material/CircularProgress";
import "./Movies.css";
import { Link } from "react-router-dom";
import MoviesSearchData from "./MoviesHeader";

export default function MoviesMainPage() {
  const { data, error, isLoading } = useGetTopRatedByNameQuery();

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
    <Grid>
      <Container>
        <MoviesSearchData />
        <h1>Movies</h1>
        <Grid container>
          {data.results.map((mainMovies) => (
            <Grid item xs={12} sm={6} md={3} p={1}>
              <Link
                className="link"
                to={`detail/${mainMovies.id}`}
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
                    sx={{ height: "100%", width: "100%", boxShadow: "none" }}
                  >
                    <Grid sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="340"
                        sx={{ borderRadius: "4px" }}
                        image={`https://www.themoviedb.org/t/p/original/${mainMovies.backdrop_path}`}
                      />

                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        sx={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          top: "-28px",
                          left: "10px",
                        }}
                      >
                        <CircularProgress
                          variant="determinate"
                          sx={{
                            backgroundColor: "#0e2541",
                            borderRadius: "50%",
                          }}
                          value={(mainMovies.vote_average * 100) / 10}
                        />
                        <Grid
                          sx={{
                            position: "absolute",
                          }}
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            color="#fff"
                          >
                            {(mainMovies.vote_average * 100) / 10 + "%"}
                          </Typography>
                        </Grid>
                      </Typography>
                    </Grid>
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        pb: "0px !important",
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {mainMovies.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {mainMovies.release_date}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}
