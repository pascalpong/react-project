import { Button, Stack } from "@mui/joy";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';


const Footer = () => {
    return (
        
    <Stack
      id="tab-bar"
      direction="row"
      justifyContent="space-around"
      spacing={1}
      sx={{
        display: { xs: 'flex', sm: 'none' },
        zIndex: '999',
        bottom: 0,
        position: 'fixed',
        width: '100dvw',
        py: 2,
        backgroundColor: 'background.body',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Button
        variant="plain"
        color="neutral"
        component="a"
        href="#profile"
        size="sm"
        startDecorator={<EmailRoundedIcon />}
        sx={{ flexDirection: 'column', '--Button-gap': 0 }}
      >
        Email
      </Button>
      <Button
        variant="plain"
        color="neutral"
        aria-pressed="true"
        component="a"
        href="#content"
        size="sm"
        startDecorator={<PeopleAltRoundedIcon />}
        sx={{ flexDirection: 'column', '--Button-gap': 0 }}
      >
        Team
      </Button>
      <Button
        variant="plain"
        color="neutral"
        component="a"
        href="#info"
        size="sm"
        startDecorator={<FolderRoundedIcon />}
        sx={{ flexDirection: 'column', '--Button-gap': 0 }}
      >
        Files
      </Button>
    </Stack>
    )
}

export default Footer;