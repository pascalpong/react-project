import { Box, Grid, Card, CardContent, Typography, Sheet, Divider, Modal, ModalDialog, Stack, Button } from '@mui/joy';
import { projects } from '../../../details/projects/details';
import ProjectDetails from '../ProjectDetails';
import Header from '../Layouts/Header';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getProjectImageCount } from '../../../utilities/generalFunctions';

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
      <Header details={details} />
      <Divider />
      <Box sx={{ mt: 2 }}>
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
          <div className="pt-10">
          {projects.map((project: any) => (
            <SwiperSlide key={project.id}>
              <Card
                variant="outlined"
                sx={{
                  height: '40vh',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  overflowY: 'auto',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 'md',
                  },
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => setSelectedProject(project.id)}
              >
                <CardContent>
                  <Typography level="h3" sx={{ mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography level="body-sm">
                    {project.description}
                  </Typography>
                </CardContent>

                <Box sx={{ mt: 'auto' }}>
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      sx={{ mt: 1, p: 1 }}
                    >
                        {project.url && 
                        <Button
                          variant="outlined"
                          color="neutral"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.url, '_blank');
                          }}
                          fullWidth
                        >
                          Visit Website
                        </Button>}
                        
                        <Button
                          variant="outlined"
                          color="neutral"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project.id);
                          }}
                          fullWidth
                        >
                          View Images
                        </Button>
                    </Stack>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>
      </Box>

      <Modal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        <ModalDialog
          sx={{
            maxWidth: 800,
            width: '100%',
            p: 3
          }}
        >
          {selectedProject && (
            <>
              <Box sx={{ 
                maxHeight: '80vh', 
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f0f0f0',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#888',
                  borderRadius: '4px',
                  '&:hover': {
                    background: '#666',
                  },
                },
              }}>
                {selectedProject && Array.from(
                  { length: getProjectImageCount(projects.find(p => p.id === selectedProject)?.folder || '') }, 
                  (_, i) => (
                    <img
                      key={i + 1}
                      src={`/projects/${projects.find(p => p.id === selectedProject)?.folder}/image${i + 1}.png`}
                      alt={`Project ${selectedProject} ${i + 1}`}
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        marginBottom: '16px'
                      }}
                    />
                  )
                )}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                  fullWidth
                  variant="solid"
                  color="danger"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
              </Box>
            </>
          )}
        </ModalDialog>
      </Modal>
    </Sheet>
  );
};

export default Content;