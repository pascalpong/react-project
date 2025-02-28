import { AccordionSummary, Accordion, AccordionDetails, Typography, Grid } from "@mui/material";  
import { Box, Container } from "@mui/joy";
import Footer from "./Layouts/Footer";
import Content from "./contents";
import { CheckSerial } from "../../utilities/generalFunctions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    const access = localStorage.getItem('access');
    console.log('Access from localStorage:', access);

    const accessData = JSON.parse(access ?? '{}');
    console.log('Parsed access data:', accessData);
    console.log('Authentication status:', accessData.data?.authenticated);

    useEffect(() => {
        if (!access || !accessData.data?.authenticated) {
            console.log('Redirecting: No access or not authenticated');
            navigate('/info#serial');
        } else {
            console.log('Authentication successful');
        }
    }, []);

    return (
        <> 
        <Footer />
        <Container>
            <Grid container>
                <Grid p={1} item xs={12} lg={12}> 
                    {accessData.data && <Content details={accessData.data} />}
                </Grid>
            </Grid> 
        </Container>
        </>
    )
}

export default Projects;
