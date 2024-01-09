import { Box } from "@mui/material";
import HomeSlider from "./HomeSlider"; 
import CardHead from "./Cards/Head";

const Home = () => {
    return (
        <Box pt={4}>
            <Box>
                <CardHead/>
                <CardHead/>
                <CardHead/>
                <CardHead/>
            </Box>
            <Box
                pb={{ xs: 10, sm: 2 }}
                position={"fixed"}
                right={0}
                left={0}
                bottom={0}
            >
                <HomeSlider />
            </Box>
        </Box>
    );
}

export default Home;
