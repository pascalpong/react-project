import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from './TwoSidedLayout';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, prefersReducedMotion } from '../../utilities/animations';
import PageMeta from '../SEO/PageMeta';

const Home = () => {
    const navigate = useNavigate();
    const navigateTo = (path: string) => () => navigate(path);
    const reducedMotion = prefersReducedMotion();

    return (
        <>
            <PageMeta 
                title="Home - Full-Stack Developer Portfolio"
                description="Welcome to Pascal Pongchinda's portfolio. Full-Stack Developer with over 3 years of experience in web development. Explore my work and projects."
            />
            <TwoSidedLayout>
            <Box
                component={motion.div}
                variants={reducedMotion ? {} : staggerContainer}
                initial="hidden"
                animate="visible"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                    maxWidth: { xs: '100%', md: '600px' },
                }}
            >
                <motion.div variants={reducedMotion ? {} : fadeInUp}>
                    <Chip 
                        size="lg" 
                        variant="outlined" 
                        color="neutral"
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                        }}
                    >
                        PASCAL PONGCHINDA
                    </Chip>
                </motion.div>
                
                <motion.div variants={reducedMotion ? {} : fadeInUp}>
                    <Typography
                        level="h1"
                        fontWeight="xl"
                        fontSize="clamp(2rem, 1.5rem + 2.5vw, 3.5rem)"
                        sx={{
                            mb: 2,
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        To find out more about me and my work experience.
                    </Typography>
                </motion.div>
                
                <motion.div variants={reducedMotion ? {} : fadeInUp}>
                    <Typography 
                        fontSize="lg" 
                        textColor="text.secondary" 
                        lineHeight="lg"
                        sx={{
                            mb: 3,
                            maxWidth: '540px',
                        }}
                    >
                        Please copy the CODE provided and paste it into the input field in the next page.
                    </Typography>
                </motion.div>
                
                <Box
                    component={motion.div}
                    variants={reducedMotion ? {} : fadeInUp}
                    sx={{ 
                        width: '100%',
                        maxWidth: { xs: '100%', md: '300px' }
                    }}
                >
                    <Button 
                        variant='outlined' 
                        onClick={navigateTo('/info')} 
                        size="lg" 
                        fullWidth 
                        endDecorator={<ArrowForward />}
                        component={motion.button}
                        whileHover={reducedMotion ? {} : { scale: 1.02, x: 4 }}
                        whileTap={reducedMotion ? {} : { scale: 0.98 }}
                        sx={{
                            fontWeight: 600,
                            px: 3,
                            py: 1.5,
                            transition: 'all 0.2s ease',
                        }}
                    >
                        See more
                    </Button>
                </Box>
            </Box>
        </TwoSidedLayout>
        </>
      );
}

export default Home;
