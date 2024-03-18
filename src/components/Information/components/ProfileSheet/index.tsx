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
        
        <Card sx={{ width: '100%' }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-lg">PASCAL PONGCHINDA</Typography>
            <Typography level="body-xs">
              Full-Stack Developer
            </Typography>
          </Box>
          <Divider />
           
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: 'flex' , my: 1 }}
          > 
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