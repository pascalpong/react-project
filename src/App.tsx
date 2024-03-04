import './App.css';
import Box from '@mui/material/Box'; 
import Main from './Main';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import Header from './components/Header';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
 
export default function FixedBottomNavigation() {

  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const pageSelect = (value: string) => {
    if (location.pathname === `/${value}`) {
      return;
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        navigate(`/${value}`);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <Box ref={ref}>
      <Container className={isAnimating ? 'page-transition' : ''}>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="page-transition"
            timeout={300}
          >
            <Main location={location} />
          </CSSTransition>
        </TransitionGroup>
        <Footer pageSelect={pageSelect} />
      </Container>
    </Box>
  );
}