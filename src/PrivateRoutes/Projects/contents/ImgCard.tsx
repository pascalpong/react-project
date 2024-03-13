import { Box, Button, Card, CardContent, CardCover, Chip, Dropdown, IconButton, Menu, MenuButton, MenuItem, Typography } from "@mui/joy";
 
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const ImgCard = () => {
    return (
        <Card
            variant="solid"
            invertedColors
            size="sm"
            sx={{
                border: '1px solid',
                borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
                minHeight: { xs: 200, md: 300 },
                width: '100%',
            }}
        >
            <CardContent
                sx={{
                    mb: 'auto',
                    flexGrow: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'end',
                }}
            > 
                <Button
                    color="neutral"
                    onClick={() => {}}
                    size="sm" 
                    sx={{
                        width: '100%',
                        justifyContent: "end"
                    }}
                    variant="outlined" 
                    endDecorator={<ArrowForwardIosRoundedIcon fontSize="small" />}
                >
                    See Project
                </Button>
            </CardContent>
            <CardCover>
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=400&auto=format"
                    srcSet="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=400&auto=format&dpr=2 2x"
                />
            </CardCover>
            <CardCover
                sx={{
                    background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.12))',
                }}
            />
        </Card>
    )
}

export default ImgCard;