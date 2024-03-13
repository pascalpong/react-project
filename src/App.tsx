import './App.css';
import Box from '@mui/material/Box'; 
import Main from './Main';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import AuthProvider from './AuthProvider';
 
export default function FixedBottomNavigation() {

  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  useEffect(() => { 
    const access = JSON.parse(localStorage.getItem('access') || '{}');
    if (access && Object.keys(access).length > 0) {
      setIsAuthenticated(true);
    }
  }, []); 
 
  return (
    <Box className={'page-transition'}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page-transition"
          timeout={300}
        >
          {/* <AuthProvider> */}
            <Main isAuthenticated={isAuthenticated} />
          {/* </AuthProvider> */}
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}