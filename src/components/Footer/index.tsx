import { BottomNavigation, BottomNavigationAction, Container, Paper } from "@mui/material"
import { useEffect, useState } from "react";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Footer = ({ pageSelect }: { pageSelect: (value: string) => void }) => {

    const [value, setValue] = useState('');
    useEffect(() => {
        pageSelect(value);
    },[value])

    return ( 
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction value={''} label="Home" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction value={'contact'} label="Contact" icon={<PhoneRoundedIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    )
}

export default Footer