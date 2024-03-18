import FooterStack from './components/FooterStack';
import InfoSheet from './components/InfoSheet';
import { Box, Button, Snackbar, Stack } from '@mui/joy';
import { Container, Grid } from '@mui/material';
import ContentSheet from './components/ContentSheet';
import ProfileSheet from './components/ProfileSheet';
import { keyframes } from '@mui/system';
import { useState } from 'react';
import ExperienceDetails from './experiences';

export default function Information() {

  
  const [open, setOpen] = useState(false);
  const checkSeriaResult = (result: boolean) => {
    setOpen(!result);
  }
  

  return ( 
    <>
      <FooterStack />
      <Container>
        <Grid
          sx={{
            paddingBottom: [8,0,0],
            paddingTop: 2,
          }}
          spacing={1}
          container
        >
          <Grid item xs={12} lg={8} id="profile">
            <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap sx={{ height: '100%'}}>
              <ProfileSheet />
              <ContentSheet checkSeriaResult={checkSeriaResult} />
            </Stack>
          </Grid> 
          <Grid item xs={12} lg={4} id="info">
            <InfoSheet data={ExperienceDetails} />
          </Grid> 
        </Grid>
      </Container>
      <Snackbar
        variant='outlined'
        color='danger'
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)} 
        anchorOrigin={{vertical: 'top' , horizontal: 'center'}}
      >
        Serial number is not valid!
      </Snackbar>
    </>
  );
}