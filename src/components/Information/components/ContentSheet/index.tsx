import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography'; 
import LoadingButton from '@mui/lab/LoadingButton';
import AspectRatio from '@mui/joy/AspectRatio';
import Divider from '@mui/joy/Divider';
import FolderIcon from '@mui/icons-material/Folder';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Button, Input } from '@mui/joy';
import { useEffect, useState } from 'react';
import { useCheckSerialMutation } from '../../../../api/serialService';
import { useNavigate } from 'react-router-dom';

const ContentSheet = ({checkSeriaResult}: {checkSeriaResult:(result: boolean) => void}): JSX.Element => {

  const [checkSerial, setCheckSerial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serial, setSerial] = useState('');
  const [toCheckSerial] = useCheckSerialMutation();
  const navigate = useNavigate();

  useEffect(() => {
    // this is to check  /#serial in the url
    if (window.location.hash.includes('serial')) {
      setCheckSerial(true);
    }
  },[])

  useEffect(() => {
    const access = JSON.parse(localStorage.getItem('access') ?? '{}')
    if (access && Object.keys(access).length > 0) {
      setSerial(access.data.serial) 
    }
  },[])

  const onChangeSerial = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerial(e.target.value)
  }

  const handleCheckSerial = async () => {
    try {
      setLoading(true);
      const response = await toCheckSerial({ serial }) as any;
      if(response.data) {
        setCheckSerial(true);
        setLoading(false);
        localStorage.setItem('access', JSON.stringify(response.data));
        navigate('/projects')
      } else {
        setCheckSerial(false);
        checkSeriaResult(false);
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
    }
  };
 
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
              error={checkSerial}
              color='danger'
              placeholder="Serial number"
              onChange={onChangeSerial}
              value={serial}
              endDecorator={
                <Button 
                  variant="outlined"
                  color='danger'
                  startDecorator={<FolderCopyIcon />}
                  loading={loading}
                  onClick={handleCheckSerial}
                >
                  See Projects
                </Button >
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