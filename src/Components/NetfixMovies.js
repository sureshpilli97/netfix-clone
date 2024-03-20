import React from 'react';
import { Box } from '@mui/material';
import Movies from '../assets/data/Movies.json';
import MovieCard from './MovieCard';



const NetflixMovies = () => {

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

export default NetflixMovies;