import { AccordionActions, AccordionSummary, Accordion, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from "@mui/joy";
import ImgCard from "../contents/ImgCard";

const ProjectDetails = () => {
    return (
        <Box
            sx={{
                height: '100%',
                overflow: 'auto',
            }}
        >
        {Array.from({ length: 3 }).map((_, index) => (
            <Accordion
                key={index}
                sx={{  
                }} 
            >
                <AccordionSummary 
                    component="div"
                    expandIcon={<ExpandMoreIcon />} 
                >
                    <Typography level="h4" fontSize="sm" sx={{ mb: 0.5 }}>
                    Yosemite National Park
                    </Typography>
                </AccordionSummary> 
                <AccordionActions>
                    <ImgCard />
                </AccordionActions>
            </Accordion> 
        ))}
        </Box>
    )
}

export default ProjectDetails;
