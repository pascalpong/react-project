import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Button, Input, Stack, Divider, Sheet, Chip, Box, Typography, Grid } from '@mui/joy';
import { useEffect, useState } from 'react';
import { CheckSerial } from '../../../../utilities/generalFunctions';
import { useNavigate } from 'react-router-dom';
import Education from './Education';
import Languages from './Language';
import { CreateTimeLog } from '../../../../utilities/generalFunctions';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../../../../utilities/animations';

const ContentSheet = ({checkSeriaResult}: {checkSeriaResult:(result: boolean) => void}): JSX.Element => {

  const [checkSerial, setCheckSerial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serial, setSerial] = useState('');
  const reducedMotion = prefersReducedMotion();
  
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
      const response = await CheckSerial(serial);
      console.log('Serial check response:', response);

      if (response) {
        // Match the expected data structure
        localStorage.setItem('access', JSON.stringify({
          data: {
            serial: response.serial,
            title: response.title,
            description: response.description,
            authenticated: true
          }
        }));
        
        setCheckSerial(true);
        checkSeriaResult(true);
        CreateTimeLog(serial);
        
        setTimeout(() => {
          navigate('/projects');
        }, 100);
      } else {
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
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        variant="outlined" 
        sx={{  
          borderRadius: 'md', 
          mb: 3,
          width: '100%',
          boxShadow: 'sm',
          '&:hover': {
            boxShadow: 'md',
            transition: 'box-shadow 0.3s ease',
          },
        }}
      > 
        <Stack
          spacing={2}
          sx={{ p: { xs: 2, sm: 3 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Typography
            level="title-lg"
            textColor="text.primary"
            sx={{ 
              fontWeight: 700,
              textAlign: 'center',
              mb: 1,
            }}
          >
            Enter the code to see my projects and Github!
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              alignItems: 'start', 
              flexWrap: 'wrap', 
              width: '100%',
              gap: 1,
            }}
          > 
            <Input
              fullWidth 
              error={checkSerial}
              color={checkSerial ? 'danger' : 'success'}
              placeholder="Serial number"
              onChange={onChangeSerial}
              value={serial}
              size="sm"
              sx={{
                flex: 1,
                minWidth: { xs: '150px', sm: '200px' },
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
              endDecorator={
                <Button 
                  variant="outlined"
                  color={checkSerial ? 'danger' : 'success'}
                  startDecorator={<FolderCopyIcon />}
                  loading={loading}
                  onClick={handleCheckSerial}
                  component={motion.button}
                  whileHover={reducedMotion ? {} : { scale: 1.02 }}
                  whileTap={reducedMotion ? {} : { scale: 0.98 }}
                  size="sm"
                  sx={{
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    See Projects
                  </Box>
                  <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                    See
                  </Box>
                </Button >
              } 
            />
          </Box>
        </Stack> 
        <Divider sx={{ my: 2 }} />
        <Stack 
          spacing={2}
          flexDirection={'column'} 
          justifyContent={'center'}
          flexGrow={1}
          padding={{ xs: 2, sm: 3 }}
        >
          <Typography 
            level="body-md" 
            textColor="text.secondary"
            sx={{ 
              lineHeight: 1.7,
              textAlign: 'justify',
            }}
          >
            Has over 3 years of experience both in Thailand and abroad in
            web - development (PHP and JS based) and 2 years of experience as
            a part-time 3D visualizer. Collaborated with various kinds of projects
            and various scales of clients.
            Graduated from an international design school in Bangkok,
            Thailand.
          </Typography>
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            <Grid xs={12} md={8} lg={8}>
              <Stack spacing={{ xs: 1.5, sm: 2 }}>
                <Education name='Assumption University' school='School of Architecture' description='Class of 2018 - Bangkok, Thailand' />
                <Languages languages={['English (IELTS 7.5)', 'Thai (Native)']} description='Languages' />
              </Stack>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <Button
                size="sm"
                variant='outlined'
                color='success'
                fullWidth 
                startDecorator={<AttachFileRoundedIcon />}
                onClick={() => window.open('https://drive.google.com/file/d/10KX5sxC3ifiPkR_Kt6EPS50Z-T9Ae_mt/view?usp=drivesdk', '_blank')}
                component={motion.button}
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                sx={{ 
                  height: { xs: 'auto', md: '100%' },
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  transition: 'all 0.2s ease',
                }}
              >
                <Typography 
                  level="body-sm" 
                  textAlign={'left'} 
                  color='success' 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
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