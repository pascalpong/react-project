import { AspectRatio, Avatar, Box, Button, Card, CardOverflow, Chip, Divider, Input, Sheet, Snackbar, Tooltip, Typography } from "@mui/joy";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import FolderIcon from '@mui/icons-material/Folder';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ProjectDetails from "../ProjectDetails";
import Header from "../Layouts/Header";


const Content = () => {
    return (
        
        <Sheet
            variant="outlined"
            sx={{
            minHeight: 500,
            borderRadius: 'sm',
            p: 2,
            mb: 3,
            }}
        >
            <Header />
            <Divider />
            <Box
                sx={{
                    alignItems: 'center',
                    height: '65vh',
                    mt: 2,
                }}
            >
                <ProjectDetails />
            </Box>
        </Sheet>
    )
}

export default Content;