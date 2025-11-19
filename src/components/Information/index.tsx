import FooterStack from './components/FooterStack';
import InfoSheet from './components/InfoSheet';
import { Box, Snackbar, Stack } from '@mui/joy';
import { Container, Grid } from '@mui/material';
import ContentSheet from './components/ContentSheet';
import ProfileSheet from './components/ProfileSheet';
import { useState } from 'react';
import ExperienceDetails from './experiences';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, prefersReducedMotion } from '../../utilities/animations';
import PageMeta from '../SEO/PageMeta';

export default function Information() {
  const [open, setOpen] = useState(false);
  const checkSeriaResult = (result: boolean) => {
    setOpen(!result);
  }
  const reducedMotion = prefersReducedMotion();

  return ( 
    <>
      <PageMeta 
        title="About Me - Experience & Skills"
        description="Learn more about Pascal Pongchinda's professional experience, skills, education, and contact information. Full-Stack Developer with expertise in PHP, JavaScript, React, and more."
        keywords="Pascal Pongchinda, Full-Stack Developer, Experience, Skills, PHP, JavaScript, React, Laravel, Web Development, Thailand, Bangkok, Contact"
      />
      <FooterStack />
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'flex-start', lg: 'center' },
          alignItems: 'center',
          minHeight: { xs: 'auto', lg: '100vh' },
          height: { xs: 'auto', lg: '100vh' },
          py: { xs: 2, sm: 3, md: 4, lg: 3 },
          px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
          overflow: { xs: 'visible', lg: 'hidden' },
          pb: { xs: 10, sm: 10, md: 10, lg: 3 },
        }}
      >
        <Grid
          sx={{
            width: '100%',
            height: { xs: 'auto', lg: '100%' },
            alignItems: { xs: 'flex-start', lg: 'stretch' },
          }}
          spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4 }}
          container
        >
          {/* Profile and Content Section */}
          <Grid item xs={12} md={12} lg={8} id="profile">
            <Stack 
              spacing={{ xs: 2, sm: 2.5, md: 3 }} 
              direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
              sx={{ 
                height: { xs: 'auto', lg: '100%' },
                alignItems: 'stretch',
              }}
            >
              <Box
                component={motion.div}
                variants={reducedMotion ? {} : slideInLeft}
                initial="hidden"
                animate="visible"
                sx={{ 
                  width: { xs: '100%', md: '100%', lg: '320px' },
                  flexShrink: 0,
                }}
              >
                <ProfileSheet />
              </Box>
              <Box
                component={motion.div}
                variants={reducedMotion ? {} : slideInRight}
                initial="hidden"
                animate="visible"
                sx={{ 
                  flex: { xs: '0 0 auto', md: '0 0 auto', lg: '1 1 auto' },
                  width: { xs: '100%', md: '100%', lg: 'auto' },
                }}
              >
                <ContentSheet checkSeriaResult={checkSeriaResult} />
              </Box>
            </Stack>
          </Grid> 
          
          {/* Experience Section */}
          <Grid item xs={12} md={12} lg={4} id="info">
            <Box
              component={motion.div}
              variants={reducedMotion ? {} : fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              sx={{
                height: { xs: 'auto', lg: '100%' },
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <InfoSheet data={ExperienceDetails} />
            </Box>
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
        The code is not valid!
      </Snackbar>
    </>
  );
}