import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './Css/NetflixCss.css';
import SquidGame from '../assets/SquidGame.mp4'
import { Box } from '@mui/material';
import NetfixChildren from './NetfixChildren';
const NetflixBannerChild=()=> {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className='banner' >
          <video src={SquidGame} autoPlay loop muted/>
      </Box>
      <NetfixChildren/>
    </React.Fragment>
  );
}
export default NetflixBannerChild;