import { AccordionSummary, Accordion, AccordionDetails, Typography, Grid } from "@mui/material";  
import { Box, Container } from "@mui/joy";
import Footer from "./Layouts/Footer";
import Content from "./contents";


const Projects = () => {
    return (
        <> 
        <Footer />
        <Container>
            <Grid container>
                <Grid item xs={12} lg={8}> 
                    <Box p={1} id="content">
                        <Content />
                    </Box>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    lg={4} 
                    id="info"
                >
                    
                </Grid> 
            </Grid> 
        </Container>
        </>
    )
}

export default Projects;
