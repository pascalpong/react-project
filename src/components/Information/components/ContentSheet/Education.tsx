import { Card, CardContent, Typography, Divider } from "@mui/joy"; 
import { motion } from 'framer-motion';

const Education = ({name, school, description}: {name: string, school: string, description: string}) => {
    return (
        <Card 
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            variant="outlined"
            sx={{
                borderRadius: 'md',
                boxShadow: 'sm',
                '&:hover': {
                    boxShadow: 'md',
                    transition: 'box-shadow 0.3s ease',
                },
            }}
        >
            <Typography 
                level="title-sm" 
                textAlign={'center'}
                sx={{ 
                    fontWeight: 700,
                    py: 1.5,
                }}
            >
                Education
            </Typography>
            <Divider />
          <CardContent sx={{ py: 2 }}>
            <Typography 
                textAlign={'center'} 
                level="title-md"
                sx={{ 
                    fontWeight: 700,
                    mb: 0.5,
                }}
            >
                {name}
            </Typography>
            <Typography 
                textAlign={'center'} 
                level="body-sm"
                textColor="text.secondary"
                sx={{ 
                    fontWeight: 500,
                    mb: 0.5,
                }}
            >
                {school}
            </Typography>
            <Typography 
                textAlign={'center'} 
                level="body-xs"
                textColor="text.tertiary"
            >
                {description}
            </Typography>
          </CardContent>
        </Card>
    )
}

export default Education;