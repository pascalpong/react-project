import { AccordionSummary, Accordion } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardActions, CardContent, Chip, Typography, Button, Stack, Snackbar } from "@mui/joy";
import { useGetProjectsQuery } from "../../../api/projectService";
import { useEffect, useState } from "react";

const ProjectDetails = () => {

    const projects = useGetProjectsQuery({});
    const [ projectsDetails, setProjectsDetails] = useState([])

    const [open, setOpen] = useState(false);
    const [snackberMessage, setSnackbarMessage] = useState('');
    
    useEffect(() => {
        if(projects.data && projects.data.data) {  
            const setDetails = projects.data.data.map((project: any) => {
                const { id, title, type, technologies, deployment, database, username, password, url } = project;
                return { 
                    id, 
                    title, 
                    type, 
                    url, 
                    technologies: JSON.parse(technologies), 
                    deployment: JSON.parse(deployment), 
                    database: JSON.parse(database), 
                    username, 
                    password 
                };
            })
            setProjectsDetails(setDetails);
        } 
    },[projects])
    
    return (
        <Box
            sx={{
                height: '100%',
                overflow: 'auto',
            }}
        >
        {projectsDetails.map((detail: any, index: number) => (
            <Accordion key={index} sx={{padding:1}}>
                <AccordionSummary 
                    component="div"
                    expandIcon={<ExpandMoreIcon />} 
                >
                    <Typography level="h4" fontSize="sm" sx={{ mb: 0.5 }}>
                        {detail.title}
                    </Typography>
                </AccordionSummary>
                <Card
                    variant="outlined"
                    color="neutral"
                    invertedColors
                >
                    <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                    {detail.technologies.map((tech: string, index: number) => (
                        <Chip key={index} size="sm" variant="soft">
                            {tech}
                        </Chip>
                    ))}  
                    </Stack>
                    <div>
                        <Typography level="title-lg">
                            {detail.type}
                        </Typography>
                    </div>
                    <CardContent>
                        <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                            {(detail.database !== null && detail.database.length > 0) && (
                            <Card variant="outlined" color="neutral" sx={{ width: '100%' }}>
                                <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                                    <Typography level="title-md">Database</Typography>
                                    {detail.database.map((tech: string, index: number) => (
                                        <Chip key={index} size="sm" variant="soft">
                                            {tech}
                                        </Chip>
                                    ))}  
                                </Stack>
                            </Card>
                            )}
                            {(detail.deployment !== null && detail.deployment.length > 0) && (
                            <Card variant="outlined" color="neutral" sx={{ width: '100%' }}>
                                <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                                    <Typography level="title-md">Deployment</Typography>
                                    {detail.deployment.map((tech: string, index: number) => (
                                        <Chip key={index} size="sm" variant="soft">
                                            {tech}
                                        </Chip>
                                    ))}  
                                </Stack>
                            </Card>
                            )}
                            {( detail.username !== null ) && (
                            <Card variant="outlined" color="neutral" sx={{ width: '100%' }}>
                                <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                                    <Typography level="title-md">Username</Typography>
                                    <Button variant="outlined" size="sm" fullWidth color="neutral" onClick={() => navigator.clipboard.writeText(detail.username).then(() => { setSnackbarMessage('Username copied to clipboard'); setOpen(true) })}>
                                        {detail.username}
                                    </Button> 
                                </Stack>
                            </Card>
                            )}
                            {( detail.password !== null ) && (
                            <Card variant="outlined" color="neutral" sx={{ width: '100%' }}>
                                <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                                    <Typography level="title-md">Password</Typography>
                                    <Button variant="outlined" size="sm" fullWidth color="neutral" onClick={() => navigator.clipboard.writeText(detail.password).then(() => { setSnackbarMessage('Password copied to clipboard'); setOpen(true) })}>
                                        {detail.password}
                                    </Button> 
                                </Stack>
                            </Card>
                            )}
                        </Stack>
                    </CardContent> 
                    {detail.url !== null && (
                        <CardActions>
                            <Button variant="solid" color="neutral" onClick={() => window.open(detail.url, '_blank')}>
                                See Project
                            </Button>
                        </CardActions>
                    )}
                </Card> 
            </Accordion> 
        ))}
        
        <Snackbar
            variant='outlined'
            color='success'
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)} 
            anchorOrigin={{vertical: 'top' , horizontal: 'center'}}
          >
            {snackberMessage}
        </Snackbar>
        </Box>
    )
}

export default ProjectDetails;
