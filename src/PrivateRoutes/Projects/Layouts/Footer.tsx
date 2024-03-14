import { Button, Stack } from "@mui/joy"; 
import FolderIcon from '@mui/icons-material/Folder'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { useNavigate } from "react-router-dom";


const Footer = () => {
  
  const navigate = useNavigate();
  const navigateTo = (path: string) => () => {
    navigate(path)
  }

    return (
    <Stack
      id="tab-bar"
      direction="row"
      justifyContent="space-evenly" 
      sx={{
        display: { xs: 'flex', sm: 'none' },
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
        variant="outlined"
        color="neutral"
        href="#profile"
        size="sm"
        startDecorator={<FolderIcon />}
        sx={{ 
          flexDirection: 'row', 
          width: '75%'
        }}
      >
        Download Resume
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
    )
}

export default Footer;