import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import AspectRatio from '@mui/joy/AspectRatio';
import Divider from '@mui/joy/Divider';
import Avatar from '@mui/joy/Avatar';
import Tooltip from '@mui/joy/Tooltip';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import FolderIcon from '@mui/icons-material/Folder';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Input } from '@mui/joy';
import { LocationOn } from '@mui/icons-material';

const ContentSheet = () => {
 
    return (
        <Sheet
      variant="outlined"
      sx={{
        minHeight: 500,
        borderRadius: 'sm',
        p: 2,
        mb: 3,
      }}
    > 
      <Box
        sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          level="title-lg"
          textColor="text.primary"
          endDecorator={
            <Chip component="span" size="sm" variant="outlined" color="warning">
              Personal
            </Chip>
          }
        >
          Enter the serial number to see my projects!
        </Typography>
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            alignItems: 'start',
            gap: 1,
            flexWrap: 'wrap', 
            width: '100%',
          }}
        > 
          <Input
            fullWidth
            placeholder="Serial number"
            endDecorator={
              <Button variant="soft" color="neutral" startDecorator={<FolderCopyIcon />}>
                See Projects
              </Button>
            } 
          />
        </Box>
      </Box>
      <Divider />
      <Typography level="body-sm" mt={2} mb={2}>
        Hello, my friend!
        <br />
        <br />
        So, it seems we are getting there! Our trip is finally here. As you know, I
        love Yosemite National Park, a lot of great climbers and explorers have made
        history there, so I&apos;m very excited to bring you with me in this journey.
        <br />
        <br />
        There are plenty of amazing things to see there, from internationally
        recognized granite cliffs, waterfalls, clear streams, giant sequoia groves,
        lakes, mountains, meadows, glaciers, and a lot o biological diversity. It is
        amazing that almost 95 percent of the park is designated wilderness. Yosemite
        is one of the largest and least fragmented habitat blocks in the Serra
        Nevada, and the park supports a fantastic diversity of plants and animals.
        <br />
        <br />
        I really hope you love coming along with me, we will have an awesome time!
        I&apos;m attaching a few pics I took on the last time I went there-get
        excited!
        <br />
        <br />
        See you soon, Alex Jonnold
      </Typography>
      <Divider />
      <Typography level="title-sm" mt={2} mb={2}>
        Attachments
      </Typography>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          '& > div': {
            boxShadow: 'none',
            '--Card-padding': '0px',
            '--Card-radius': theme.vars.radius.sm,
          },
        })}
      >
        <Card variant="outlined">
          <AspectRatio ratio="1" sx={{ minWidth: 80 }}>
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=80"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&h=160 2x"
              alt="Yosemite National Park"
            />
          </AspectRatio>
        </Card>
        <Card variant="outlined">
          <AspectRatio ratio="1" sx={{ minWidth: 80 }}>
            <img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&h=80"
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&h=160 2x"
              alt="Yosemite National Park"
            />
          </AspectRatio>
        </Card>
        <Card variant="outlined" orientation="horizontal">
          <CardOverflow>
            <AspectRatio ratio="1" sx={{ minWidth: 80 }}>
              <div>
                <FolderIcon />
              </div>
            </AspectRatio>
          </CardOverflow>
          <Box sx={{ py: { xs: 1, sm: 2 }, pr: 2 }}>
            <Typography level="title-sm" color="primary">
              videos-hike.zip
            </Typography>
            <Typography level="body-xs">100 MB</Typography>
          </Box>
        </Card>
      </Box>
    </Sheet>
    )
}

export default ContentSheet;