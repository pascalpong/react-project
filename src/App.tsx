import * as React from "react";
import Box from "@mui/material/Box";
import Main from "./main";
import { Container } from "@mui/material";
import Footer from "./components/Footer";

export default function FixedBottomNavigation() {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box ref={ref}>
      <Container>
        <Main />
        <Footer />
      </Container>
    </Box>
  );
}
