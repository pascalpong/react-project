import { Card, CardContent, CardOverflow, Divider, Typography } from "@mui/joy";

const Languages = ({languages, description}: {languages: string[], description: string}) => {
    return (
        <Card variant="outlined">
          <CardContent>
            <Typography textAlign={'center'} level="title-sm" >{description}</Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
            <Divider inset="context" />
            <CardContent orientation="horizontal" sx={{ justifyContent:'center' }}>
            {languages.length > 0 && languages.map((language, index) => (
              <>
                <Typography key={index} level="body-xs" fontWeight="md" textColor="text.secondary">
                  {language}
                </Typography>
                {languages.length - 1 !== index && (
                  <Divider orientation="vertical" />
                )}
              </>
            ))}
            </CardContent>
          </CardOverflow>
        </Card>
    )
}

export default Languages;