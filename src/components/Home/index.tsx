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
                The power to do more
            </Chip>
            <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            >
                A large headlinerer about our product features & services
            </Typography>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                A descriptive secondary text placeholder. Use it to explain your business
                offer better.
            </Typography>
            <Button variant='outlined' onClick={navigateTo('/info')} size="sm" fullWidth endDecorator={<ArrowForward />}>
                Get Started
            </Button>
        </TwoSidedLayout>
      );
}

export default Home;
