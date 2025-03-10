import { Button, Stack } from "@mui/joy"; 
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  
  const navigate = useNavigate();
  const navigateTo = (path: string) => () => {
    navigate(path)
  }

    return (
      <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          position: 'fixed',
          bottom: 70,
          width: '100vw',
          py: 1,
          backgroundColor: 'background.body',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack direction="row" spacing={1} width="100%" sx={{ paddingX: 1 }}>
          <Button
            fullWidth
            variant="solid"
            color="primary"
            onClick={() => window.open('mailto:pongchindap@gmail.com', '_blank')}
            endDecorator={<EmailIcon />}
          >
            Email Me
          </Button>
        </Stack>
      </Stack>
    <Stack
      id="tab-bar"
      direction="row"
      justifyContent="space-evenly" 
      sx={{
        display: 'flex',
        zIndex: '999',
        bottom: 0,
        position: 'fixed',
        width: '100vw',
        py: 1,
        backgroundColor: 'background.body',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Button
        fullWidth
        variant="outlined"
        color="success"
        onClick={() => window.open('https://github.com/pascalpong', '_blank')}
        sx={{ 
          flexDirection: 'row', 
          width: '75%'
        }}
        endDecorator={<GitHubIcon />}
      >
        Check my Github
      </Button>
      <Button
        variant="solid"
        color="neutral"
        onClick={navigateTo('/info')}
        size="sm"
        startDecorator={<AccountBoxRoundedIcon />}
        sx={{ 
          flexDirection: 'column', 
          width: '20%'
        }}
      >
        Profile
      </Button>
    </Stack>
    </>
    )
}

export default Footer;