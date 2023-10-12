import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import NetflixNavBar from './NetflixNaVBar';
import NetflixBanner from './NetflixBanner';
import { Route, Routes } from 'react-router-dom';
import NetflixBannerChild from './NetflixBannerChild';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Netflix = (props) => {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 600); 
    };
    checkMobileView();
    const handleScroll = () => {
      const c = document.getElementById('nav');
      
      if(!isMobileView){
        if (window.scrollY <= 1) {
          c.style.backgroundColor = 'transparent';
        } else {
          c.style.backgroundColor = '#141414';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [isMobileView]);
    
  return (
    <div style={{backgroundColor:'#141414'}}>
      <React.Fragment>
        <CssBaseline />
        <AppBar id="nav" style={{backgroundColor:'transparent',boxShadow:'none'}}>
          <NetflixNavBar />
        </AppBar>
        <Routes>
          <Route path='/' element={<NetflixBanner />} />
          <Route path='/children' element={<NetflixBannerChild/>} />
        </Routes>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </div>
  );
};

export default Netflix;
