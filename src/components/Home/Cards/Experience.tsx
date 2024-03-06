import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Card, CardContent, Typography } from "@mui/material";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

const CardExperience = () => {


    const data = [
        {
            id: 1,
            title: "Eat",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio tempor, vehicula odio nec, tincidunt ex."
        },
        {
            id: 2,
            title: "Code",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio tempor, vehicula odio nec, tincidunt ex."
        },
        {
            id: 3,
            title: "Sleep",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio tempor, vehicula odio nec, tincidunt ex."
        }
    ]

    return (
        <>
            <Card>
                <CardContent>
                    <h4>Card</h4>
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                            },
                        }}
                    >
                    {data.map((item) => {
                        return (
                            <TimelineItem key={item.id}>
                                <TimelineOppositeContent color="textSecondary">
                                09:30 am
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {/* This line checks if the current item's id is not equal to the length of the data array.
                                    If the condition is true (meaning, if the current item is not the last item in the array),
                                    it renders the <TimelineConnector /> component. If the condition is false (meaning, if the}
                                    current item is the last item in the array), it does not render the <TimelineConnector />.
                                    This is to prevent the rendering of the <TimelineConnector /> after the last item in the array. */}
                                    {item.id !== data.length ? <TimelineConnector /> : null}
                                </TimelineSeparator>
                                <TimelineContent>
                                <Card>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <CardContent>
                                        {item.description}
                                    </CardContent>
                                </Card>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}
                    </Timeline>
                </CardContent>
            </Card>
        </>
    )
}

export default CardExperience;