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
import { Button, Grid } from '@mui/joy';

const ProfileSheet = () => {
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
                  <Input size="sm" placeholder="First name" />
                  <Input size="sm" placeholder="Last name" />
                </FormControl>
              </Stack>
            </Stack>
            <Grid container spacing={2}>
              <Grid xs={12} lg={4}>
                <Stack spacing={1}>
                  <FormLabel>Role</FormLabel>
                  <Input size="sm" defaultValue="UI Developer" />
                </Stack>
              </Grid>
              <Grid xs={12} lg={8}>
                <Stack spacing={1}>
                  <FormLabel>Contact</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    endDecorator={<Button variant='plain' color='neutral' startDecorator={<ContentCopyRoundedIcon />}>Copy</Button>}
                    placeholder="email"
                    defaultValue="pongchindap@gmail.com"
                    sx={{ flexGrow: 1 }}
                  />
                  <Input
                    size="sm"
                    type="tel"
                    startDecorator={<LocalPhoneRoundedIcon />}
                    endDecorator={<Button variant='plain' color='neutral' startDecorator={<ContentCopyRoundedIcon />}>Copy</Button>}
                    placeholder="email"
                    defaultValue="(TH) 0909892510"
                    sx={{ flexGrow: 1 }}
                  />
                  <Input
                    size="sm"
                    type="tel"
                    startDecorator={<LocalPhoneRoundedIcon />}
                    endDecorator={<Button variant='plain' color='neutral' startDecorator={<ContentCopyRoundedIcon />}>Copy</Button>}
                    placeholder="email"
                    defaultValue="(VN) 0367074990"
                    sx={{ flexGrow: 1 }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Stack> 
        </Card>
    )
}

export default ProfileSheet;