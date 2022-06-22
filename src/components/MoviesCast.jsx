import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetMoviesCastByNameQuery } from "../service/services";
import { Container } from "@mui/system";

export default function MoviesCast() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMoviesCastByNameQuery(id);
  console.log("cast", data);
  if (isLoading) return "loading";
  return (
    <Container>
      <Box>
        <h1>Top Billed Cast</h1>
        <Grid container sx={{ flexWrap: "nowrap", overflowX: "scroll" }}>
          {data.cast.map((data) => (
            <Grid item p={1}>
              <Link className="link" to={`/detail/${data.id}`}>
                <Card sx={{ height: "100%", width: "200px" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="190"
                    image={
                      "https://www.themoviedb.org/t/p/original/" +
                      data.profile_path
                    }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.character}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
