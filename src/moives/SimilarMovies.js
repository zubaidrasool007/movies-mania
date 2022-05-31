import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export function SimilarMovies() {
    const [similarMovies, setSimilarMovies] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&page=1`).then(similar => {
            return similar.json()
        }).then(similarData => {
            setSimilarMovies(similarData.results)
        })
    }, [id])
    return (
        <Box>
            <h1>Similar Movies</h1>
            <Grid container sx={{ flexWrap: 'nowrap', overflowX: "scroll" }}>
                {similarMovies.map((data) =>
                    <Grid item p={1} >
                        <Link className='link' to={`/detail/${data.id}`}>
                            <Card sx={{ height: "100%", width: '200px' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="190"
                                    image="https://ww2.kqed.org/app/uploads/sites/12/2015/04/the-avengers-800x450.jpg"
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
                    </Grid>
                )}
            </Grid>
            <h1></h1>
        </Box>
    )
}
