import { Box, Chip, Tooltip, Typography } from "@mui/joy";


const Header = ({ details }: { details: any }) => {

    return (
        <>
            <Box
                sx={{ 
                    py: { xs: 1.5, sm: 2 }, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'start',
                    gap: 1,
                }}
            >
                <Typography
                    level="title-lg"
                    textColor="text.primary"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                    }}
                >
                    {`Welcome :) ${details.title}`}
                </Typography>
                <Typography
                    level="body-md"
                    textColor="text.secondary"
                    sx={{
                        lineHeight: 1.6,
                    }}
                >
                    {`${details.description}`}
                </Typography>
            </Box>
        </>
    )
}

export default Header;