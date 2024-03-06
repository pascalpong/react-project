import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SocialMedia = () => {
  return (
    <Box py={1}>
      <Card sx={{ minWidth: 275, height: "90vh" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Social Media
          </Typography>
        </CardContent>
        <Stack 
          sx={{
            position: "fixed",
            right: 0,
            left: 0,
            bottom: "10%",
            p: 4
          }}
          spacing={{ xs: 1, sm: 2 }} 
          direction="row" 
          useFlexGap 
          flexWrap="wrap"
        >
            <Button fullWidth variant="outlined" endIcon={<LinkedInIcon />}>
              LinkedIn
            </Button>
            <Button fullWidth variant="outlined" endIcon={<GitHubIcon />}>
              Github
            </Button>
            <Button fullWidth variant="outlined" endIcon={<WhatsAppIcon />}>
              Whatsapp
            </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default SocialMedia;
