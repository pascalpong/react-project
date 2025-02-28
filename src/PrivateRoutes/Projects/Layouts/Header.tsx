import { Box, Chip, Tooltip, Typography } from "@mui/joy";


const Header = ({ details }: { details: any }) => {

    return (
        <>
            <Box
                sx={{ 
                    py: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'start' 
                }}
            >
                <Typography
                    level="title-lg"
                    textColor="text.primary" 
                >
                    {`Welcome :) ${details.title}`}
                </Typography>
                <Typography
                    level="body-sm"
                    textColor="text.primary" 
                >
                    {`${details.description}`}
                </Typography>
            </Box>
        </>
    )
}

export default Header;