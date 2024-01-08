import { Button, Paper, Stack } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';

const Footer = () => {

    return ( 
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding:2 }} elevation={3}>
                <Stack 
                    justifyContent="end" 
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 1, md: 1 }}
                >
                    <Button variant="outlined" href='/' endIcon={<SaveIcon />}>
                        Home
                    </Button>
                    <Button variant="outlined" href='/Topics'>
                        Topics
                    </Button>
                    <Button variant="outlined" href='/Settings'>
                        Setting
                    </Button>
                </Stack>
            </Paper>
        </>
    )
}

export default Footer