import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Button, Input, Stack, Divider, Sheet, Chip, Box, Typography, Grid } from '@mui/joy';
import { useEffect, useState } from 'react';
import { useCheckSerialMutation } from '../../../../api/serialService';
import { useNavigate } from 'react-router-dom';
import Education from './Education';
import Languages from './Language';

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
        id='content'
        variant="outlined" 
        sx={{  
          borderRadius: 'sm',
          p: 2,
          mb: 3,
          width: '100%',
        }}
      > 
        <Stack
          spacing={1}
          sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Typography
            level="title-lg"
            textColor="text.primary" 
          >
            Enter the serial number to see my projects and Github!
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
              color={checkSerial ? 'danger' : 'success'}
              placeholder="Serial number"
              onChange={onChangeSerial}
              value={serial}
              endDecorator={
                <Button 
                  variant="outlined"
                  color={checkSerial ? 'danger' : 'success'}
                  startDecorator={<FolderCopyIcon />}
                  loading={loading}
                  onClick={handleCheckSerial}
                >
                  See Projects
                </Button >
              } 
            />
          </Box>
        </Stack> 
        <Divider/>
        <Stack spacing={1}>
          <Typography level="body-sm" mt={3} mb={3}>
            <br />
            Has over 3 years of experience both in Thailand and abroad in
            web - development (PHP and JS based) and 2 years of experience as
            a part-time 3D visualizer. Collaborated with various kinds of projects
            and various scales of clients.
            Graduated from an international design school in Bangkok,
            Thailand.
            <br /> 
          </Typography> 
          <Grid container spacing={1} sx={{ flexGrow: 1 }}>
            <Grid xs={12} lg={4}>
              <Education name='Assumption University' school='School of Architecture' description='Class of 2018 - Bangkok, Thailand' />
            </Grid>
            <Grid xs={6} lg={4}>
              <Languages languages={['English', 'Thai']} description='Languages' />
            </Grid>
            <Grid xs={6} lg={4}>
              <Button
                size="sm"
                variant='outlined'
                color='success'
                fullWidth 
                sx={{ height: '100%'}}
                startDecorator={<AttachFileRoundedIcon />}
                onClick={() => window.open('https://drive.google.com/file/d/10KX5sxC3ifiPkR_Kt6EPS50Z-T9Ae_mt/view?usp=drivesdk', '_blank')}
              >
                <Typography level="body-sm" textAlign={'left'} color='success'>
                  Download my CV
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Stack> 
      </Sheet>
  )
}

export default ContentSheet;