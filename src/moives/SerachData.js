import { Box } from '@mui/system'
import React from 'react'
import { TextField } from '@mui/material'

export function SerachData() {
    return (

        <Box>
            <Box className='serchBox'>
                <Box>
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                </Box>
                <Box>
                    <TextField id="outlined-basic" label="search" variant="outlined" />
                </Box>
            </Box>

        </Box>



    )
}
