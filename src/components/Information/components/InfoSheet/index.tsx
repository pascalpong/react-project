import { Avatar, Box, Card, Chip, Divider, List, Sheet, Typography } from "@mui/joy"

const InfoSheet = ({data}: {data: any}) => {
    return (
        <>
                <Card 
                    component="li"
                    variant="soft"
                    sx={{
                        py: 2,
                        px: 1,
                        borderRadius: 'sm',  
                    }}
                >
                <Typography level="title-sm">Experience:</Typography> 
                    <Card  
                        sx={{ 
                            overflow: 'auto',
                            height: '90vh', 
                        }}
                    >
                    {data.map((experience:any, index: number) => (
                        <Sheet
                            key={index}
                            component="li"
                            variant="outlined"
                            sx={{
                                borderRadius: 'sm',
                                p: 2,
                                listStyle: 'none',
                            }}
                        >
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Avatar
                                    variant="outlined"
                                    src={experience.avatar2x}
                                    srcSet={`${experience.avatar2x} 2x`}
                                    sx={{ 
                                        borderRadius: '50%',
                                        width: 80,
                                        height: 80,
                                    }}
                                />
                                <div>
                                    <Typography level="title-md">{experience.name}</Typography>
                                    <Typography level="body-xs">
                                        {experience.position}
                                    </Typography>
                                    <Divider />
                                    <Typography level="body-xs">
                                        { ` ${experience.durations.start.month}, ${experience.durations.start.year} - ${experience.durations.end.present ? `PRESENT` : `${experience.durations.end.month}, ${experience.durations.end.year}`} `}
                                    </Typography>
                                    <Divider />
                                    <Typography level="body-xs">
                                        {experience.location}
                                    </Typography>
                                </div> 
                            </Box>
                            <Divider component="div" sx={{ my: 2 }} />
                                <Typography level="body-xs">{experience.description}</Typography>
                            <Divider component="div" sx={{ my: 2 }} />
                            <Typography level="title-sm">Technology:</Typography>
                            <Box sx={{ mt: 1.5 , gap: 1 }}>
                                {experience.stacks.map((skill: string, skillIndex: string) => (
                                <Chip
                                    key={skillIndex}
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
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