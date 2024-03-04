import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./Head.css";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

const CardHead = () => {
  return (
    <Box py={1}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <video autoPlay={true} muted loop>
            <source
              src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
              type="video/mp4"
            />
          </video>
          <h2>sail</h2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardHead;
