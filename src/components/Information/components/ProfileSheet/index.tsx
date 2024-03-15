import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'; 
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Button, Grid, Snackbar } from '@mui/joy';
import { useState } from 'react';

const ProfileSheet = () => {

  const email = 'pongchindap@gmail.com';
  const phoneVn = '+84367074990';
  const phoneTh = '+66909892510';

  const [open, setOpen] = useState(false);
  const [snackberMessage, setSnackbarMessage] = useState('');
  const whatsappContact = (phone: string) => () => {
    window.open(`https://wa.me/${phone}`, '_blank');
  }

    return (
        
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will apper to the networks.
            </Typography>
          </Box>
          <Divider />
           
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: 'flex' , my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio> 
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    sx={{
                      display: {
                        sm: 'flex-column',
                        md: 'flex-row',
                      },
                      gap: 2,
                    }}
                  >
                    <Typography level="body-lg" textAlign={'left'} color='neutral' >
                      Pascal Pongchinda
                    </Typography> 
                    <Typography level="body-sm" textAlign={'left'} color='neutral' >
                    Full Stack Developer
                    </Typography> 
                  </FormControl>
                </>
              </Stack>
            </Stack>
            <Grid container spacing={2}> 
              <Grid xs={12} lg={12}>
                <Stack spacing={1}>
                  <FormLabel>Contact</FormLabel>
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
                    sx={{ flexGrow: 1 }}
                  >
                    <Typography level="body-sm" textAlign={'left'} color='neutral'>
                      {email}
                    </Typography>
                  </Button>
                  <Button
                    startDecorator={<WhatsAppIcon />}
                    color='success'
                    variant='outlined'
                    onClick={whatsappContact(phoneTh)}
                  >
                    <Typography level="body-sm" textAlign={'left'} color='success'>
                      Please contact via WhatsApp for calls,<br />
                      out of Thailand at the moment.
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
                    sx={{ flexGrow: 1 }}
                  >
                    <Typography level="body-sm" textAlign={'left'} color='neutral'>
                      {`(TH) ${phoneTh}`}
                    </Typography>
                  </Button>
                  <Button
                    size="sm"
                    variant='outlined'
                    color='neutral'
                    startDecorator={<LocalPhoneRoundedIcon />}
                    onClick={
                      () => navigator.clipboard.writeText(phoneVn)
                        .then(() => {
                          setOpen(true);
                          setSnackbarMessage('Phone number copied to clipboard');
                        })
                        .catch(err => {
                          console.error('Could not copy text: ', err);
                        })
                    }
                    sx={{ flexGrow: 1 }}
                  >
                    <Typography level="body-sm" textAlign={'left'} color='neutral'>
                      {`(VN) ${phoneVn}`}
                    </Typography>
                  </Button>
                </Stack>
              </Grid>
            </Grid>
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