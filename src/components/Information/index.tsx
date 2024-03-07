import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import List from '@mui/joy/List';
import Layout from './components/Layout';
import FooterStack from './components/FooterStack';
import InfoSheet from './components/InfoSheet';
import { Box, Stack, Typography } from '@mui/joy';
import { Container, Grid } from '@mui/material';
import ContentSheet from './components/ContentSheet';
import ProfileSheet from './components/ProfileSheet';

export default function Information() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const peopleData = [
    {
      name: 'Andrew Smith',
      position: 'UI Designer',
      avatar2x: 'https://i.pravatar.cc/80?img=7',
      companyData: [
        {
          role: 'Senior designer',
          name: 'Dribbble',
          logo: 'https://www.vectorlogo.zone/logos/dribbble/dribbble-icon.svg',
          years: '2015-now',
        },
        { 
          role: 'Designer',
          name: 'Pinterest',
          logo: 'https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg',
          years: '2012-2015',
        },
      ],
      skills: ['UI design', 'Illustration'],
    },
    {
      name: 'John Doe',
      position: 'Frontend Developer',
      avatar2x: 'https://i.pravatar.cc/80?img=8',
      companyData: [
        {
          role: 'UI Engineer',
          name: 'Google',
          logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
          years: '2018-now',
        },
        {
          role: 'Frontend Developer',
          name: 'Amazon',
          logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg',
          years: '2015-2018',
        },
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Alice Johnson',
      position: 'Product Manager',
      avatar2x: 'https://i.pravatar.cc/80?img=9',
      companyData: [
        {
          role: 'Product Manager',
          name: 'Microsoft',
          logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
          years: '2016-now',
        },
        {
          role: 'Product Analyst',
          name: 'IBM',
          logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg',
          years: '2013-2016',
        },
      ],
      skills: ['Product Management', 'Market Analysis'],
    },
  ];

  return ( 
    <>
      <FooterStack />
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={8} spacing={2}>
            <Box p={1} id="profile">
              <ProfileSheet />
            </Box>
            <Box p={1} id="content">
              <ContentSheet />
            </Box>
          </Grid>
          <Grid 
            item 
            xs={12} 
            lg={4} 
            id="info"
          >
            <InfoSheet data={peopleData} />
          </Grid> 
        </Grid> 
      </Container>
    </>
  );
}