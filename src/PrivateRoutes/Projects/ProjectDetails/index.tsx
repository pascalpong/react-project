import { AccordionSummary, Accordion } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardActions, CardContent, Chip, Typography, Button, Stack, Snackbar, Grid } from "@mui/joy";
import { useGetProjectsQuery } from "../../../api/projectService";
import { useEffect, useState } from "react";
import { projects } from '../../../details/projects/details';

interface ProjectDetailsProps {
  projectId: number;
}

const ProjectDetails = ({ projectId }: ProjectDetailsProps) => {
    const [projectsDetails, setProjectsDetails] = useState([])
    const [images, setImages] = useState<string[]>([]);
    const project = projects.find(p => p.id === projectId);

    const [open, setOpen] = useState(false);
    const [snackberMessage, setSnackbarMessage] = useState('');
    
    useEffect(() => {
        const setDetails = projects.map((project) => {
            const { id, title, description, folder } = project;
            return { 
                id, 
                title,
                type: 'Web Application', // or set appropriate default
                url: '', // or set appropriate default
                technologies: [], 
                deployment: [], 
                database: [], 
                username: null, 
                password: null 
            };
        });
        setProjectsDetails(setDetails as any);
    }, []);

    useEffect(() => {
        if (project) {
            const loadImages = async () => {
                try {
                    const imageFiles = await import(`../../../public/projects/${project.folder}/*`);
                    const imageUrls = Object.values(imageFiles).filter((path: any) => 
                        path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg')
                    );
                    setImages(imageUrls as string[]);
                } catch (error) {
                    console.error('Error loading images:', error);
                }
            };

            loadImages();
        }
    }, [project]);

    if (!project) {
        return <Typography level="h3">Project not found</Typography>;
    }

    return (
        <Stack spacing={3} sx={{ p: 2 }}>
            <Typography level="h2">
                {project.title}
            </Typography>
            
            <Card variant="outlined">
                <CardContent>
                    <Typography level="body-lg">
                        {project.description}
                    </Typography>
                </CardContent>
            </Card>

            <Box>
                <Typography level="h3" sx={{ mb: 2 }}>
                    Project Screenshots
                </Typography>
                <Grid container spacing={2}>
                    {images.map((image, index) => (
                        <Grid key={index} xs={12} sm={6} md={4}>
                            <Card
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: 'md',
                                    },
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                }}
                                onClick={() => window.open(image, '_blank')}
                            >
                                <Box
                                    component="img"
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        aspectRatio: '16/9',
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

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
        </Stack>
    )
}

export default ProjectDetails;
