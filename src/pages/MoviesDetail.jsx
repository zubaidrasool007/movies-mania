import { useParams } from "react-router";
import { useGetMoviesDetailByNameQuery } from "../service/services";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  MoviesCast,
  SimilarMoviesPage,
  MoviesReviewsPage,
} from "../components";

export const MoviesDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMoviesDetailByNameQuery(id);
  console.log("detail", data);

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
    <Grid container sx={{ marginTop: 4 }}>
      <Grid>
        <Card
          sx={{
            display: "flex",
            pl: { xs: 4, sm: 10 },
            py: { xs: 2, sm: 6 },
            backgroundImage: `url(https://www.themoviedb.org/t/p/original/${data.backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", sm: "unset" },
              justifyContent: "center",
            }}
          >
            <Grid xs={12} sm={5} md={3} sx={{ mr: 4, position: "relative" }}>
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
                <CardMedia
                  component="img"
                  sx={{
                    height: "500px",
                    borderRadius: "10px",
                    backgroundSize: "cover",
                  }}
                  image={`https://www.themoviedb.org/t/p/original/${data.backdrop_path}`}
                  alt="nature"
                />
              )}
            </Grid>
            <Grid
              xs={12}
              sm={7}
              md={9}
              sx={{ display: "flex", flexDirection: "column" }}
            >
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
                  <Grid sx={{ display: "flex", mt: 4 }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CircularProgress
                        variant="determinate"
                        sx={{ backgroundColor: "#0e2541", borderRadius: "50%" }}
                        value={(data.vote_average * 100) / 10}
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
                          {Math.round(data.vote_average * 100) / 10 + "%"}
                        </Typography>
                      </Grid>
                    </Typography>
                  </Grid>
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Grid>
          </Grid>

          <Grid
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "black",
              opacity: "0.7",
              zIndex: "-1",
            }}
          ></Grid>
        </Card>
      </Grid>
      <MoviesCast />
      <MoviesReviewsPage />
      <SimilarMoviesPage />
    </Grid>
  );
};
