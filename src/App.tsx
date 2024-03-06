import './App.css';
import Box from '@mui/material/Box'; 
import Main from './Main';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
 
export default function FixedBottomNavigation() {

  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
 
  return (
    <Box ref={ref} className={isAnimating ? 'page-transition' : ''}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page-transition"
          timeout={300}
        >
          <Main location={location} />
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}