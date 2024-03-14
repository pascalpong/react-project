import { Button, Stack } from "@mui/joy";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';


const FooterStack = () => {
    return (
        
    <Stack
      id="tab-bar"
      direction="row"
      justifyContent="space-evenly" 
      spacing={1}
      sx={{
        display: { xs: 'flex', sm: 'none' },
        zIndex: '999',
        bottom: 0,
        position: 'fixed',
        width: '100dvw',
        py: 1, 
        backgroundColor: 'background.body',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Button
        variant="outlined"
        color="neutral"
        component="a"
        href="#profile"
        size="sm"
        startDecorator={<AccountBoxRoundedIcon />}
        sx={{ 
          flexDirection: 'column', 
          width: '30%'
        }}
      >
        Profile
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        component="a"
        href="#content"
        size="sm"
        startDecorator={<GridViewRoundedIcon />}
        sx={{ 
          flexDirection: 'column',
          width: '30%'
        }}
      >
        Projects
      </Button>
      <Button
        variant="outlined"
        color="neutral"
        component="a"
        href="#info"
        size="sm"
        startDecorator={<AssignmentRoundedIcon />}
        sx={{ 
          flexDirection: 'column', 
          width: '30%'
        }}
      >
        Experience
      </Button>
    </Stack>
    )
}

export default FooterStack;