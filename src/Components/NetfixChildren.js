import React from 'react';
import { Box } from '@mui/material';
import Movies from '../assets/data/Children.json';
import MovieCard from './MovieCard';



const NetflixChildren = () => {

  return (
    
    <Box style={{backgroundColor:'#141414',objectFit:'contain'}}>
      {

        Object.keys(Movies).map(i=>(
          <MovieCard key={i} zone={i} movies={Movies[i]} />
        ))

      }
    </Box>
  )
}

export default NetflixChildren;