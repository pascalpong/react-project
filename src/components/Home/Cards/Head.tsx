import {
  Box,
  Button,
  Card,
  CardContent
} from "@mui/material";
import "./Head.css";
import { useNavigate } from "react-router-dom";

const CardHead = () => {

  
  const navigate = useNavigate();

  return (
    <Box className="sail-bg">
      <Card sx={{ width: "100%" }}>
          <CardContent>
            <video autoPlay={true} muted loop>
              <source
                src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
                type="video/mp4"
              />
            </video>
            <h2>sail</h2>
            <Button 
              variant="outlined" 
              color="primary" 
              fullWidth
              onClick={() => navigate("/info")}
            >
              Book Now
            </Button>
          </CardContent>
      </Card>
    </Box>
  );
};

export default CardHead;
