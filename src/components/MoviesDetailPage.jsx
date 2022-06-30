import React from "react";
import { useParams } from "react-router";
import { useGetMoviesDetailByNameQuery } from "../service/services";
import { Box } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import SimilarMoviesPage from "./SimilarMoviesPage";
import MoviesReviewsPage from "./MoviesReviewsPage";
import MoviesCast from "./MoviesCast";
export default function MoviesDetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetMoviesDetailByNameQuery(id);

  if (isLoading) return "loading...";
  return (
    <Box sx={{ marginTop: 4 }}>
      <Card
        sx={{
          display: "flex",
          pl: 10,
          pt: 6,
          pb: 6,
          backgroundImage: `url(https://www.themoviedb.org/t/p/original/${data.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: "1",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 300,
            height: "500px",
            borderRadius: "10px",
            backgroundSize: "cover",
          }}
          image={`https://www.themoviedb.org/t/p/original/${data.backdrop_path}`}
          alt="nature"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", color: "#fff" }}>
            <Typography sx={{ mt: 10 }} component="div" variant="h4">
              {data.title} ({data.release_date})
            </Typography>
            <Typography variant="subtitle1" component="div">
              <Typography variant="h5">Overview</Typography>
              {data.overview}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <Rating name="read-only" value={data.vote_average / 2} readOnly />
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "black",
            opacity: "0.8",
            zIndex: "-1",
          }}
        ></Box>
      </Card>
      <MoviesCast />
      <MoviesReviewsPage />
      <SimilarMoviesPage />
    </Box>
  );
}
