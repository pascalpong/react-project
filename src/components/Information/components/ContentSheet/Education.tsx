import { Card, CardContent, Typography } from "@mui/joy";
import { Divider } from "@mui/material";

const Education = ({name, school, description}: {name: string, school: string, description: string}) => {
    return (
        <Card variant="outlined">
            <Typography level="title-sm" textAlign={'center'}>Education</Typography>
            <Divider />
          <CardContent>
            <Typography textAlign={'center'} level="title-md">{name}</Typography>
            <Typography textAlign={'center'} level="body-sm">{school}</Typography>
            <Typography textAlign={'center'} level="body-xs">{description}</Typography>
          </CardContent>
        </Card>
    )
}

export default Education;