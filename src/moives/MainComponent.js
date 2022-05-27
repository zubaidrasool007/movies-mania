import React from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/system'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { SerachData } from './SerachData';
import { MoviesPage } from './MoviesPage';
import { MovieDetail } from './MovieDetail';
import { Route, Routes } from 'react-router-dom';
export function MainComponent() {
    return (
        <Box>
            <Navbar />


            <Container >
                {/* <Box >
                    <SerachData />
                    <MoviesPage/>
                </Box> */}
                <Routes>
                <Route path="/" element={  <MoviesPage/>} />
                    {/* <Route path="detail" element={<MovieDetail />} /> */}
                </Routes>

            </Container>
            <Routes>
            
                    <Route path="detail/:id" element={<MovieDetail />} />
                </Routes>


        </Box>
    )
}
