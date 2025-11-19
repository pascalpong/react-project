import { Button, Stack } from "@mui/joy";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../../../../utilities/animations';

const FooterStack = () => {
    const reducedMotion = prefersReducedMotion();
    
    return (
    <Stack
      id="tab-bar"
      component={motion.div}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      direction="row"
      justifyContent="space-evenly" 
      spacing={1}
      sx={{
        display: { xs: 'flex', sm: 'none' },
        zIndex: 999,
        bottom: 0,
        position: 'fixed',
        width: '100dvw',
        py: 1.5, 
        px: 1,
        backgroundColor: 'background.body',
        borderTop: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <Button
        variant="outlined"
        color="neutral"
        href="#profile"
        size="sm"
        startDecorator={<AccountBoxRoundedIcon />}
        component={motion.a}
        whileHover={reducedMotion ? {} : { scale: 1.05 }}
        whileTap={reducedMotion ? {} : { scale: 0.95 }}
        sx={{ 
          flexDirection: 'column', 
          width: '30%',
          py: 1,
          fontWeight: 600,
          transition: 'all 0.2s ease',
        }}
      >
        Profile
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        href="#content"
        size="sm"
        startDecorator={<GridViewRoundedIcon />}
        component={motion.a}
        whileHover={reducedMotion ? {} : { scale: 1.05 }}
        whileTap={reducedMotion ? {} : { scale: 0.95 }}
        sx={{ 
          flexDirection: 'column',
          width: '30%',
          py: 1,
          fontWeight: 600,
          transition: 'all 0.2s ease',
        }}
      >
        Projects
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        href="#info"
        size="sm"
        startDecorator={<AssignmentRoundedIcon />}
        component={motion.a}
        whileHover={reducedMotion ? {} : { scale: 1.05 }}
        whileTap={reducedMotion ? {} : { scale: 0.95 }}
        sx={{ 
          flexDirection: 'column', 
          width: '30%',
          py: 1,
          fontWeight: 600,
          transition: 'all 0.2s ease',
        }}
      >
        Experience
      </Button>
    </Stack>
    )
}

export default FooterStack;