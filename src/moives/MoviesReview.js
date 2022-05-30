import React from 'react'
import { Box } from '@mui/system';
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
export function MoviesReview() {
  const [reviews, setReviews] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f6bb554383b810d88fb570d3cf4c92a6&language=en-US&page=1`).then(review => {
      return review.json()
    }).then(reviewData => {
      console.log('reviewsdddddddddd', reviewData)
      setReviews(reviewData.results)
    })
  }, [id])
  return (
    <Box>
      <h1>Reviews</h1>
      {reviews.map((data) =>
        <Card p={2}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.content}
            </Typography>
          </CardContent> 
        </Card>)}
    </Box>
  )
}
