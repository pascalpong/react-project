import { AccordionSummary, Accordion, AccordionDetails, Typography, Grid } from "@mui/material";  
import { Box, Container } from "@mui/joy";
import Footer from "./Layouts/Footer";
import Content from "./contents";
import { CheckSerial } from "../../utilities/generalFunctions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageMeta from "../../components/SEO/PageMeta";

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
        <PageMeta 
            title="Projects - Portfolio Showcase"
            description="Explore Pascal Pongchinda's portfolio of web development projects including e-commerce platforms, AI-powered applications, and enterprise solutions built with Next.js, React, PHP, Laravel, and more."
            keywords="Pascal Pongchinda, Projects, Portfolio, Web Development, E-commerce, Next.js, React, PHP, Laravel, JavaScript, Full-Stack Development, Case Studies"
        />
        <Footer />
        <Container
            maxWidth="xl"
            sx={{
                py: { xs: 4, sm: 6, md: 8 },
                px: { xs: 2, sm: 3, md: 4 },
            }}
        >
            <Grid container>
                <Grid item xs={12} lg={12}> 
                    {accessData.data && <Content details={accessData.data} />}
                </Grid>
            </Grid> 
        </Container>
        </>
    )
}

export default Projects;
