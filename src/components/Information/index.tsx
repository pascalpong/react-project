import FooterStack from './components/FooterStack';
import InfoSheet from './components/InfoSheet';
import { Box, Button, Snackbar } from '@mui/joy';
import { Container, Grid } from '@mui/material';
import ContentSheet from './components/ContentSheet';
import ProfileSheet from './components/ProfileSheet';
import { keyframes } from '@mui/system';
import { useState } from 'react';
import ExperienceDetails from './experiences';

export default function Information() {

  
  const [open, setOpen] = useState(false);
  const inAnimation = keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `;

  const outAnimation = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  `;
 
  const animationDuration = 600;
  const checkSeriaResult = (result: boolean) => {
    setOpen(!result);
  }
  

  return ( 
    <>
      <FooterStack /> 
      <Container>
        <Grid
        sx={{
          paddingBottom: [8,0,0]
        }}
        container>
          <Grid item xs={12} lg={8}>
            <Box p={1} id="profile">
              <ProfileSheet />
            </Box>
            <Box p={1} id="content">
              <ContentSheet checkSeriaResult={checkSeriaResult} />
            </Box>
          </Grid>
          <Grid 
            item 
            xs={12} 
            lg={4} 
            id="info"
          >
            <InfoSheet data={ExperienceDetails} />
          </Grid> 
        </Grid> 
      </Container>
      <Snackbar 
        anchorOrigin={{ 
          vertical: 'top', 
          horizontal : 'right' 
        }} 
        color="danger"
        size="md"
        variant="solid"
        open={open} 
        autoHideDuration={4000}
        animationDuration={animationDuration} 
        endDecorator={
          <Button
            onClick={() => setOpen(false)}
            size="sm"
            variant="soft"
            color="danger"
          >
            Dismiss
          </Button>
        }
        sx={{
          width: '87%',
          ...(open && {
            animation: `${inAnimation} ${animationDuration}ms forwards`,
          }),
          ...(!open && {
            animation: `${outAnimation} ${animationDuration}ms forwards`,
          }),
        }}
      > 
        Serial number is not valid!
      </Snackbar>
    </>
  );
}