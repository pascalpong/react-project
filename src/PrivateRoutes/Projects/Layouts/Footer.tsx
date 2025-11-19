import { Button, Stack } from "@mui/joy"; 
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../../../utilities/animations';

const Footer = () => {
  const navigate = useNavigate();
  const reducedMotion = prefersReducedMotion();
  const navigateTo = (path: string) => () => {
    navigate(path)
  }

    return (
      <>
      <Stack
        component={motion.div}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        direction="row"
        justifyContent="space-between"
        sx={{
          position: 'fixed',
          bottom: { xs: 70, sm: 80 },
          width: '100vw',
          py: 1.5,
          px: 1,
          backgroundColor: 'background.body',
          borderTop: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <Stack direction="row" spacing={1} width="100%" sx={{ paddingX: 1 }}>
          <Button
            fullWidth
            variant="solid"
            color="primary"
            size="md"
            onClick={() => window.open('mailto:pongchindap@gmail.com', '_blank')}
            endDecorator={<EmailIcon />}
            component={motion.button}
            whileHover={reducedMotion ? {} : { scale: 1.02 }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
            sx={{
              fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
          >
            Email Me
          </Button>
        </Stack>
      </Stack>
    <Stack
      id="tab-bar"
      component={motion.div}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      direction="row"
      justifyContent="space-evenly" 
      sx={{
        display: 'flex',
        zIndex: 999,
        bottom: 0,
        position: 'fixed',
        width: '100vw',
        py: 1.5,
        px: 1,
        backgroundColor: 'background.body',
        borderTop: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <Button
        fullWidth
        variant="outlined"
        color="success"
        size="md"
        onClick={() => window.open('https://github.com/pascalpong', '_blank')}
        endDecorator={<GitHubIcon />}
        component={motion.button}
        whileHover={reducedMotion ? {} : { scale: 1.02 }}
        whileTap={reducedMotion ? {} : { scale: 0.98 }}
        sx={{ 
          flexDirection: 'row', 
          width: '75%',
          fontWeight: 600,
          transition: 'all 0.2s ease',
        }}
      >
        Check my Github
      </Button>
      <Button
        variant="solid"
        color="neutral"
        onClick={navigateTo('/info')}
        size="md"
        startDecorator={<AccountBoxRoundedIcon />}
        component={motion.button}
        whileHover={reducedMotion ? {} : { scale: 1.02 }}
        whileTap={reducedMotion ? {} : { scale: 0.98 }}
        sx={{ 
          flexDirection: 'column', 
          width: '20%',
          fontWeight: 600,
          transition: 'all 0.2s ease',
        }}
      >
        Profile
      </Button>
    </Stack>
    </>
    )
}

export default Footer;