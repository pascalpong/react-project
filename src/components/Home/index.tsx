import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from './TwoSidedLayout';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const navigateTo = (path: string) => () => navigate(path);

    return (
        <TwoSidedLayout>
            <Chip size="lg" variant="outlined" color="neutral">
                PASCAL PONGCHINDA
            </Chip>
            <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            >
                To find out more about me and my work experience.
            </Typography>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                Please copy the serial number provided and paste it into the input field in the next page.
            </Typography>
            <Button variant='outlined' onClick={navigateTo('/info')} size="sm" fullWidth endDecorator={<ArrowForward />}>
                See more
            </Button>
        </TwoSidedLayout>
      );
}

export default Home;
