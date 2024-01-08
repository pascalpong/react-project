import * as React from 'react';
import Box from '@mui/material/Box'; 
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import Main from './Main';
import { Button, Container, Stack } from '@mui/material';
import Footer from './components/Footer';
 
 
export default function FixedBottomNavigation() {

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box ref={ref}>
      <Container>
        <Main />
        <Footer/>
      </Container>
    </Box>
  );
}
