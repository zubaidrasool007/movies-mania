import React, { useEffect, useState } from 'react'
import { Box, display } from '@mui/system'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export function MoviesPage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&query=a&page=2&include_adult=false').then(response => {
      return response.json()
    }).then(value => {
      setMovies(value.results)
      console.log('mmm', value.results)
    })
  }, [setMovies])

  return (
    <Box>
      <h1>Movies</h1>
      <Grid container>
      
      {movies.map((data) =>
     
        <Grid item xs={3} sx={{p:1 , display:'flex'}}>
           <Link className='link' to={`detail/${data.id}`}>
            <Card sx={{height:"100%",width:250}}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="340"
                image="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7Bttz4hEspKlpU0Me57dkHNR3nf.jpg"
              />
               <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
             
                  {data.release_date}
                </Typography>
              </CardContent>
            </Card>
            </Link>
        </Grid> )}
        
      </Grid> 
    </Box>
  )
}
