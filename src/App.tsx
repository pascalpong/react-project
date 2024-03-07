import './App.css';
import Box from '@mui/material/Box'; 
import Main from './Main';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
 
export default function FixedBottomNavigation() {

  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const isAuthenticated = useIsAuthenticated();

  function useIsAuthenticated() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      // Replace this with your actual authentication check
      const checkAuthentication = async () => {
        const response = await fetch('/api/check-authentication');
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      };
  
      checkAuthentication();
    }, []);
  
    return isAuthenticated;
  }
 
  return (
    <Box ref={ref} className={isAnimating ? 'page-transition' : ''}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page-transition"
          timeout={300}
        >
          <Main isAuthenticated={isAuthenticated} />
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}