import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Button, Input, Stack, Divider, Sheet, Chip, Box, Typography, Grid } from '@mui/joy';
import { useEffect, useState } from 'react';
import { CheckSerial } from '../../../../utilities/generalFunctions';
import { useNavigate } from 'react-router-dom';
import Education from './Education';
import Languages from './Language';
import { CreateTimeLog } from '../../../../utilities/generalFunctions';

const ContentSheet = ({checkSeriaResult}: {checkSeriaResult:(result: boolean) => void}): JSX.Element => {

  const [checkSerial, setCheckSerial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serial, setSerial] = useState('');
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
      const response = CheckSerial(serial);
      console.log('Serial check response:', response);

      if (response) {
        setCheckSerial(true);
        const accessData = {
          data: {
            serial: response.serial,
            title: response.title,
            description: response.description,
            authenticated: true
          }
        };
        console.log('Storing access data:', accessData);
        localStorage.setItem('access', JSON.stringify(accessData));
        CreateTimeLog(serial);
        checkSeriaResult(true);
        navigate('/projects');
      } else {
        console.log('Invalid serial');
        setCheckSerial(false);
        checkSeriaResult(false);
      }
    } catch (error) {
      console.error('Error checking serial:', error);
      setCheckSerial(false);
      checkSeriaResult(false);
    } finally {
      setLoading(false);
    }
  };
 
  return (
      <Sheet
        id='content'
        variant="outlined" 
        sx={{  
          borderRadius: 'sm', 
          mb: 3,
          width: '100%',
        }}
      > 
        <Stack
          spacing={1}
          sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
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
        <Stack 
          spacing={1}
          flexDirection={'column'} 
          justifyContent={'center'}
          flexGrow={1}
          padding={1}
        >
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
          <Grid container spacing={1}>
            <Grid xs={12} lg={8}>
              <Stack spacing={1}>
                <Education name='Assumption University' school='School of Architecture' description='Class of 2018 - Bangkok, Thailand' />
                <Languages languages={['English (IELTS 7.5)', 'Thai (Native)']} description='Languages' />
              </Stack>
            </Grid>
            <Grid xs={12} lg={4}>
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