import React from "react";
import { useGetMoviesReviewsByNameQuery } from "../service/services";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
export default function MoviesReviewsPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetMoviesReviewsByNameQuery(id);

  if (isLoading) return "loading...";
  return (
    <Container>
      <Box>
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
      </Box>
    </Container>
  );
}
