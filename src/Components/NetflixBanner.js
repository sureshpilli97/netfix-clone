import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SquidGame from '../assets/SquidGame.mp4';
import './Css/NetflixCss.css';
import { Box } from '@mui/material';
import NetflixMovies from './NetfixMovies';
const NetflixBanner=()=> {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className='banner' >
          <video src={SquidGame} autoPlay loop muted/>
      </Box>
      <NetflixMovies/>
    </React.Fragment>
  );
}
export default NetflixBanner;