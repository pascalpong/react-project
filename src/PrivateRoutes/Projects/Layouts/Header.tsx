import { Box, Chip, Tooltip, Typography } from "@mui/joy";


const Header = ({ details }: { details: any }) => {

    const access = localStorage.getItem('access') ?? "{}";
    const data = JSON.parse(access).data;
    
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
                <Typography
                    level="body-sm"
                    textColor="text.primary" 
                >
                    {`You have accessed this page on ${details.timeLog}`}
                </Typography>
                <Box
                    sx={{
                        mt: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        flexWrap: 'wrap',
                    }}
                >
                    <div>
                        <Typography
                            component="span"
                            level="body-sm"
                            sx={{ mr: 1, display: 'inline-block' }}
                        >
                            to 
                        </Typography>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Header;