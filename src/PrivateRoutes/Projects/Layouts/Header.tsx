import { Avatar, Box, Chip, Divider, Tooltip, Typography } from "@mui/joy";

const Header = () => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Avatar
                        src="https://i.pravatar.cc/40?img=3"
                        srcSet="https://i.pravatar.cc/80?img=3"
                    />
                    <Box sx={{ ml: 2 }}>
                        <Typography level="title-sm" textColor="text.primary" mb={0.5}>
                            Alex Jonnold
                        </Typography>
                        <Typography level="body-xs" textColor="text.tertiary">
                            21 Oct 2022
                        </Typography>
                    </Box>
                </Box> 
            </Box>
            <Divider sx={{ mt: 2 }} />
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
                    endDecorator={
                    <Chip component="span" size="sm" variant="outlined" color="warning">
                        Personal
                    </Chip>
                    }
                >
                    Details for our Yosemite Park hike
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
                        From
                    </Typography>
                    <Tooltip size="sm" title="Copy email" variant="outlined">
                        <Chip size="sm" variant="soft" color="primary" onClick={() => {}}>
                        alex.jonnold@hike.com
                        </Chip>
                    </Tooltip>
                    </div>
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
                        steve@mail.com
                        </Chip>
                    </Tooltip>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Header;