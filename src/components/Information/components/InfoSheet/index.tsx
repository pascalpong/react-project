import { Avatar, Box, Card, Chip, Divider, List, Sheet, Typography } from "@mui/joy"
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, prefersReducedMotion } from '../../../../utilities/animations';

const InfoSheet = ({data}: {data: any}) => {
    const reducedMotion = prefersReducedMotion();
    
    return (
        <>
                <Card 
                    component="li"
                    variant="soft"
                    sx={{
                        py: { xs: 2, sm: 2.5, md: 3 },
                        px: { xs: 1.5, sm: 2, md: 3 },
                        borderRadius: 'md',
                        boxShadow: 'sm',
                        height: { xs: 'auto', lg: 'calc(100vh - 100px)' },
                        maxHeight: { xs: 'none', lg: 'calc(100vh - 100px)' },
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                <Typography 
                    level="title-md"
                    sx={{ 
                        mb: 2,
                        fontWeight: 700,
                        letterSpacing: '0.3px',
                        flexShrink: 0,
                    }}
                >
                    Experience:
                </Typography> 
                    <Card  
                        component={motion.div}
                        variants={reducedMotion ? {} : staggerContainer}
                        initial="hidden"
                        animate="visible"
                        sx={{ 
                            overflow: 'auto',
                            flex: 1,
                            minHeight: 0,
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'transparent',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'rgba(0,0,0,0.2)',
                                borderRadius: '4px',
                                '&:hover': {
                                    background: 'rgba(0,0,0,0.3)',
                                },
                            },
                        }}
                    >
                    {data.map((experience:any, index: number) => (
                        <Sheet
                            key={index}
                            component={motion.li}
                            variants={reducedMotion ? {} : fadeInUp}
                            variant="outlined"
                            sx={{
                                borderRadius: 'md',
                                p: { xs: 2, sm: 2.5 },
                                listStyle: 'none',
                                mb: 2,
                                boxShadow: 'sm',
                                '&:hover': {
                                    boxShadow: 'md',
                                    transition: 'box-shadow 0.3s ease',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                <Avatar
                                    variant="outlined"
                                    src={experience.avatar2x}
                                    srcSet={`${experience.avatar2x} 2x`}
                                    sx={{ 
                                        borderRadius: '50%',
                                        width: { xs: 60, sm: 80 },
                                        height: { xs: 60, sm: 80 },
                                        borderWidth: 2,
                                    }}
                                />
                                <Box sx={{ flex: 1 }}>
                                    <Typography 
                                        level="title-md"
                                        sx={{ 
                                            fontWeight: 700,
                                            mb: 0.5,
                                        }}
                                    >
                                        {experience.name}
                                    </Typography>
                                    <Typography 
                                        level="body-sm"
                                        textColor="text.secondary"
                                        sx={{ fontWeight: 500, mb: 1 }}
                                    >
                                        {experience.position}
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography 
                                        level="body-xs"
                                        textColor="text.tertiary"
                                        sx={{ mb: 0.5 }}
                                    >
                                        { ` ${experience.durations.start.month}, ${experience.durations.start.year} - ${experience.durations.end.present ? `PRESENT` : `${experience.durations.end.month}, ${experience.durations.end.year}`} `}
                                    </Typography>
                                    <Typography 
                                        level="body-xs"
                                        textColor="text.tertiary"
                                    >
                                        {experience.location}
                                    </Typography>
                                </Box> 
                            </Box>
                            <Divider component="div" sx={{ my: 2 }} />
                            <Typography 
                                level="body-sm"
                                textColor="text.secondary"
                                sx={{ 
                                    lineHeight: 1.7,
                                    mb: 2,
                                }}
                            >
                                {experience.description}
                            </Typography>
                            <Divider component="div" sx={{ my: 2 }} />
                            <Typography 
                                level="title-sm"
                                sx={{ 
                                    mb: 1.5,
                                    fontWeight: 600,
                                }}
                            >
                                Technology:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {experience.stacks.map((skill: string, skillIndex: number) => (
                                <Chip
                                    key={skillIndex}
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
                                    sx={{
                                        fontWeight: 500,
                                    }}
                                >
                                    {skill}
                                </Chip>
                                ))}
                            </Box>
                        </Sheet>
                    ))}
                    </Card>    
                </Card>   
        </>
        
    )
}

export default InfoSheet;