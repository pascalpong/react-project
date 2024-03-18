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
                <Grid p={1} item xs={12} lg={12}> 
                    <Content />
                </Grid>
            </Grid> 
        </Container>
        </>
    )
}

export default Projects;
