import { Box, padding, width } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export function MovieDetail() {
    const [movies, setMovies] = useState([])
    const  {id } = useParams()
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US`).then(response => {
        return response.json()
      }).then(value => {
        setMovies(value)
        console.log(value)
        
      })
  
    },[id])
    console.log('id',id)
  
   
    return (
        <Box sx={{ display: 'flex',justifyContent:'center',marginTop:4,}}>

            <Card sx={{ display: 'flex', pl:10,pt:6,pb:6}}>
                <CardMedia
                    component="img"
                    sx={{ width: 400 }}
                    image="https://i.tribune.com.pk/media/images/2000433-endgameposter-1561532245/2000433-endgameposter-1561532245.jpg"
                    alt="nature"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">  
                         {movies.title} 
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" 
                        component="div">
                            <h3>Overview</h3>  
                        {movies.overview}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                       
                    </Box>
                </Box>

            </Card>

        </Box>
    )
}
