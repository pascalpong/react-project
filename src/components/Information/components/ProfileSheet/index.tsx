import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Button, Snackbar } from '@mui/joy';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../../../../utilities/animations';

const ProfileSheet = () => {

  const email = 'pongchindap@gmail.com';
  const phoneTw = '+886972307540';
  const phoneTh = '+66909892510';

  const [open, setOpen] = useState(false);
  const [snackberMessage, setSnackbarMessage] = useState('');
  const reducedMotion = prefersReducedMotion();
  const whatsappContact = (phone: string) => () => {
    window.open(`https://wa.me/${phone}`, '_blank');
  }

    return (
        <Card 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          sx={{ 
            width: '100%',
            height: { xs: 'auto' },
            boxShadow: 'sm',
            '&:hover': {
              boxShadow: 'md',
              transition: 'box-shadow 0.3s ease',
            },
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography 
              level="title-lg"
              sx={{ 
                fontWeight: 700,
                mb: 0.5,
                letterSpacing: '0.3px',
              }}
            >
              PASCAL PONGCHINDA
            </Typography>
            <Typography 
              level="body-sm"
              textColor="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Full-Stack Developer
            </Typography>
          </Box>
          <Divider />
           
          <Stack
            direction="row"
            alignItems={'center'} 
            sx={{ flexGrow: 1 }}
          >
            <Stack
              direction="column"
              spacing={1}
              justifyContent={'center'}
              sx={{ flexGrow: 1 }}
            >
              <FormLabel sx={{ mb: 1, fontWeight: 600 }}>Contact</FormLabel>
              <Button
                size="sm"
                variant='outlined'
                color='neutral'
                onClick={
                  () => navigator.clipboard.writeText(email)
                    .then(() => {
                      setOpen(true);
                      setSnackbarMessage('Email copied to clipboard');
                    })
                    .catch(err => {
                      console.error('Could not copy text: ', err);
                    })
                }
                startDecorator={<EmailRoundedIcon />} 
                component={motion.button}
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                sx={{ 
                  flexGrow: 1,
                  justifyContent: 'flex-start',
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  transition: 'all 0.2s ease',
                }}
              >
                <Typography 
                  level="body-sm" 
                  textAlign={'left'} 
                  color='neutral' 
                  sx={{ 
                    flex: 1,
                    wordBreak: 'break-word',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  {email}
                </Typography>
              </Button>
              <Button
                startDecorator={<WhatsAppIcon />}
                color='success'
                variant='outlined'
                size="sm"
                onClick={whatsappContact(phoneTh)}
                component={motion.button}
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                sx={{ 
                  justifyContent: 'flex-start',
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  transition: 'all 0.2s ease',
                }}
              >
                <Typography 
                  level="body-sm" 
                  textAlign={'left'} 
                  color='success' 
                  sx={{ 
                    flex: 1,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  Please contact via WhatsApp for calls, out of Thailand at the moment.
                </Typography>
              </Button>
              <Button
                size="sm"
                variant='outlined'
                color='neutral'
                onClick={
                  () => navigator.clipboard.writeText(phoneTh)
                    .then(() => {
                      setOpen(true);
                      setSnackbarMessage('Phone number copied to clipboard');
                    })
                    .catch(err => {
                      console.error('Could not copy text: ', err);
                    })
                }
                startDecorator={<LocalPhoneRoundedIcon />} 
                component={motion.button}
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                sx={{ 
                  flexGrow: 1,
                  justifyContent: 'flex-start',
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  transition: 'all 0.2s ease',
                }}
              >
                <Typography 
                  level="body-sm" 
                  textAlign={'left'} 
                  color='neutral' 
                  sx={{ 
                    flex: 1,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  {`(TH) ${phoneTh}`}
                </Typography>
              </Button>
              <Button
                size="sm"
                variant='outlined'
                color='neutral'
                startDecorator={<LocalPhoneRoundedIcon />}
                onClick={
                  () => navigator.clipboard.writeText(phoneTw)
                    .then(() => {
                      setOpen(true);
                      setSnackbarMessage('Phone number copied to clipboard');
                    })
                    .catch(err => {
                      console.error('Could not copy text: ', err);
                    })
                }
                component={motion.button}
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                sx={{ 
                  flexGrow: 1,
                  justifyContent: 'flex-start',
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  transition: 'all 0.2s ease',
                }}
              >
                <Typography 
                  level="body-sm" 
                  textAlign={'left'} 
                  color='neutral' 
                  sx={{ 
                    flex: 1,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  {`(TW) ${phoneTw}`}
                </Typography>
              </Button> 
            </Stack> 
          </Stack>
          <Snackbar
            variant='outlined'
            color='success'
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)} 
            anchorOrigin={{vertical: 'top' , horizontal: 'center'}}
          >
            {snackberMessage}
          </Snackbar>
        </Card>
    )
}

export default ProfileSheet;