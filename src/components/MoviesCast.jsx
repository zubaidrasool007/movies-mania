import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetMoviesCastByNameQuery } from "../service/services";

export const MoviesCast = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMoviesCastByNameQuery(id);
  console.log("cast", data);
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

  if (error) return "something wrong";
  return (
    <Container>
      <Grid>
        <h1>Top Billed Cast</h1>
        <Grid container sx={{ flexWrap: "nowrap", overflowX: "scroll" }}>
          {data.cast.map((moviesCast) => (
            <Grid item p={1}>
              <Link className="link" to={`/detail/${moviesCast.id}`}>
                <Card
                  sx={{ height: "100%", width: "200px", boxShadow: "none" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="270px"
                    sx={{ borderRadius: "10px" }}
                    image={`https://www.themoviedb.org/t/p/original/${moviesCast.profile_path}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {moviesCast.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {moviesCast.character}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
