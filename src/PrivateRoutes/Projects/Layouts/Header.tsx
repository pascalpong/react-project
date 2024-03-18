import { Box, Chip, Tooltip, Typography } from "@mui/joy";

const Header = () => {

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
                    Projects
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
                        <Tooltip size="sm" title="Copy email" variant="outlined">
                            <Chip size="sm" variant="soft" color="primary" onClick={() => {}}>
                                {data.receiver}
                            </Chip>
                        </Tooltip>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Header;