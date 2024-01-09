import { IconButton, Paper, Stack } from "@mui/material"
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Footer = () => {

    return ( 
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding:1 }} elevation={3}>
                <Stack 
                    justifyContent={{ xs: 'center', sm: 'end' }}
                    direction={{ xs: 'row', sm: 'row' }}
                    spacing={{ xs: 1, sm: 1, md: 1 }}
                >
                    <IconButton color="primary" size="large" aria-label="home" href="/">
                        <HomeOutlinedIcon />
                    </IconButton>
                    <IconButton color="primary" size="large" aria-label="contact" href="/contact">
                        <ContactPageOutlinedIcon />
                    </IconButton>
                </Stack>
            </Paper>
        </>
    )
}

export default Footer