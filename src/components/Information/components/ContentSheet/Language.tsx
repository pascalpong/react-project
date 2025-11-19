import { Card, CardContent, CardOverflow, Divider, Typography } from "@mui/joy";
import { motion } from 'framer-motion';

const Languages = ({languages, description}: {languages: string[], description: string}) => {
    return (
        <Card 
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
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
          <CardContent sx={{ py: 2 }}>
            <Typography 
                textAlign={'center'} 
                level="title-sm"
                sx={{ 
                    fontWeight: 700,
                }}
            >
                {description}
            </Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
            <Divider inset="context" />
            <CardContent 
                orientation="horizontal" 
                sx={{ 
                    justifyContent: 'center',
                    py: 1.5,
                    gap: 1,
                }}
            >
            {languages.length > 0 && languages.map((language, index) => (
              <Typography 
                  key={index} 
                  level="body-sm" 
                  fontWeight="md" 
                  textColor="text.secondary"
                  sx={{ fontWeight: 600 }}
              >
                {language}
              </Typography>
            ))}
            </CardContent>
          </CardOverflow>
        </Card>
    )
}

export default Languages;