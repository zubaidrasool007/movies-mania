import React from "react";
import { useGetMoviesReviewsByNameQuery } from "../service/services";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
export default function MoviesReviewsPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMoviesReviewsByNameQuery(id);
  console.log("rev", data);

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
      <Grid>
        <h2>
          Reviews<sup>({data.total_results})</sup>
        </h2>
        {data.results.map((reviews) => (
          <Card p={2} sx={{ mt: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {reviews.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {reviews.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
