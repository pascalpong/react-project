import { Avatar, Box, Button, Card, Chip, Divider, List, ListItem, ListItemContent, ListItemDecorator, Sheet, Typography } from "@mui/joy"
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const InfoSheet = ({data}: {data: any}) => {
    return (
        <>
            <List
                sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 2, 
                }}
            >
                <Card 
                    component="li"
                    variant="soft"
                    sx={{
                        py: 2,
                        px: 1,
                        borderRadius: 'sm',  
                    }}
                >
                <Typography level="title-sm">Skills tags:</Typography> 
                    <Card  
                        sx={{ 
                            overflow: 'auto',
                            height: '90vh', 
                        }}
                    >
                    {data.map((person:any, index: number) => (
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
                                    src={person.avatar2x}
                                    srcSet={`${person.avatar2x} 2x`}
                                    sx={{ borderRadius: '50%' }}
                                />
                                <div>
                                    <Typography level="title-md">{person.name}</Typography>
                                    <Typography level="body-xs">{person.position}</Typography>
                                </div>
                            </Box>
                            <Divider component="div" sx={{ my: 2 }} />
                            <List sx={{ '--ListItemDecorator-size': '40px', gap: 2 }}>
                                {person.companyData.map((company: any, companyIndex: any) => (
                                <ListItem key={companyIndex} sx={{ alignItems: 'flex-start' }}>
                                    <ListItemDecorator
                                    sx={{
                                        '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        height: '100%',
                                        width: '1px',
                                        bgcolor: 'divider',
                                        left: 'calc(var(--ListItem-paddingLeft) + 12px)',
                                        top: '50%',
                                        },
                                    }}
                                    >
                                    <Avatar
                                        src={company.logo}
                                        sx={{ '--Avatar-size': '24px' }}
                                    />
                                    </ListItemDecorator>
                                    <ListItemContent>
                                        <Typography level="title-sm">{company.role}</Typography>
                                        <Typography level="body-xs">{company.name}</Typography>
                                    </ListItemContent>
                                    <Typography level="body-xs">{company.years}</Typography>
                                </ListItem>
                                ))}
                            </List>
                            <Button
                                size="sm"
                                variant="plain"
                                endDecorator={<KeyboardArrowRightRoundedIcon fontSize="small" />}
                                sx={{ px: 1, mt: 1 }}
                            >
                                Expand
                            </Button>
                            <Divider component="div" sx={{ my: 2 }} />
                            <Typography level="title-sm">Skills tags:</Typography>
                            <Box sx={{ mt: 1.5, display: 'flex', gap: 1 }}>
                                {person.skills.map((skill: string, skillIndex: string) => (
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
            </List>
        </>
        
    )
}

export default InfoSheet;