import { Box, Card, CardContent, Typography, Sheet, Divider, Modal, ModalDialog, ModalClose, Stack, Button } from '@mui/joy';
import { projects } from '../../../details/projects/details';
import Header from '../Layouts/Header';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getProjectImageCount } from '../../../utilities/generalFunctions';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../../../utilities/animations';

interface ContentProps {
  details: {
    serial: string;
    title: string;
    description: string;
    url?: string
  };
}

const Content = ({ details }: ContentProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const reducedMotion = prefersReducedMotion();

  return (
    <Sheet
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      variant="outlined"
      sx={{
        minHeight: 500,
        borderRadius: 'md',
        p: { xs: 2, sm: 3 },
        mb: 3,
        boxShadow: 'sm',
      }}
    >
      <Header details={details} />
      <Divider sx={{ my: 2 }} />
      <Box sx={{ mt: 3 }}>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={3}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project: any, index: number) => (
            <SwiperSlide key={project.id}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                variant="outlined"
                sx={{
                  height: { xs: 'auto', md: '45vh' },
                  minHeight: { xs: '300px', md: '400px' },
                  cursor: 'pointer',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'sm',
                  borderRadius: 'md',
                  '&:hover': {
                    boxShadow: 'md',
                    transition: 'box-shadow 0.3s ease',
                  },
                }}
                onClick={() => setSelectedProject(project.id)}
                whileHover={reducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 2.5 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    level="h3" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    level="body-sm"
                    textColor="text.secondary"
                    sx={{ 
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <Box sx={{ mt: 'auto', p: { xs: 1.5, sm: 2 } }}>
                    <Stack 
                      direction="row" 
                      spacing={1.5}
                    >
                        {project.url && 
                        <Button
                          variant="outlined"
                          color="neutral"
                          size="md"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.url, '_blank');
                          }}
                          fullWidth
                          component={motion.button}
                          whileHover={reducedMotion ? {} : { scale: 1.02 }}
                          whileTap={reducedMotion ? {} : { scale: 0.98 }}
                          sx={{
                            transition: 'all 0.2s ease',
                            fontWeight: 600,
                          }}
                        >
                          Visit Website
                        </Button>}
                        
                        <Button
                          variant="outlined"
                          color="neutral"
                          size="md"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project.id);
                          }}
                          fullWidth
                          component={motion.button}
                          whileHover={reducedMotion ? {} : { scale: 1.02 }}
                          whileTap={reducedMotion ? {} : { scale: 0.98 }}
                          sx={{
                            transition: 'all 0.2s ease',
                            fontWeight: 600,
                          }}
                        >
                          View Images
                        </Button>
                    </Stack>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Modal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        <ModalDialog
          sx={{
            maxWidth: { xs: '95vw', sm: 800 },
            width: { xs: '95vw', sm: '100%' },
            maxHeight: { xs: '90vh', sm: '85vh' },
            height: { xs: 'auto', sm: 'auto' },
            p: 0,
            m: { xs: 1, sm: 2 },
            borderRadius: 'md',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {selectedProject && (
            <>
              <Box sx={{ 
                p: { xs: 1.5, sm: 3 },
                pb: { xs: 1, sm: 2 },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid',
                borderColor: 'divider',
                flexShrink: 0,
              }}>
                <Typography level="title-lg" sx={{ fontWeight: 700 }}>
                  {projects.find(p => p.id === selectedProject)?.title || 'Project Images'}
                </Typography>
                <ModalClose onClick={() => setSelectedProject(null)} />
              </Box>
              <Box sx={{ 
                maxHeight: { xs: 'calc(90vh - 180px)', sm: 'calc(85vh - 180px)' },
                overflowY: 'auto',
                overflowX: 'hidden',
                flex: 1,
                p: { xs: 1.5, sm: 3 },
                WebkitOverflowScrolling: 'touch',
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '4px',
                  '&:hover': {
                    background: 'rgba(0,0,0,0.3)',
                  },
                },
              }}>
                {Array.from(
                  { length: getProjectImageCount(projects.find(p => p.id === selectedProject)?.folder || '') }, 
                  (_, i) => (
                    <Box
                      key={i + 1}
                      component="img"
                      src={`/projects/${projects.find(p => p.id === selectedProject)?.folder}/image${i + 1}.png`}
                      alt={`Project ${selectedProject} ${i + 1}`}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        mb: { xs: 1.5, sm: 2 },
                        borderRadius: 'sm',
                        display: 'block',
                      }}
                    />
                  )
                )}
              </Box>
            </>
          )}
        </ModalDialog>
      </Modal>
    </Sheet>
  );
};

export default Content;