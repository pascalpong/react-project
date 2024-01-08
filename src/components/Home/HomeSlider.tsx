import { Box, Button, ButtonGroup, Grid } from "@mui/material";

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>
  ];
  

const HomeSlider = () => {
    return (
        <>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,
                },
            }}
            >
                <ButtonGroup size="small" aria-label="small button group" 
                sx={{
                    px: 4,
                    overflow:"auto",
                    width:"90%",
                }}>
                    {buttons}
                </ButtonGroup>
            </Box>
        </>
    );
}
export default HomeSlider;
