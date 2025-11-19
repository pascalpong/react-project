import * as React from 'react';
import Container from '@mui/joy/Container';

export default function TwoSidedLayout({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {

  return (
    <Container
      maxWidth="xl"
      sx={(theme) => ({ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        gap: { xs: 4, sm: 6, md: 8 },
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      {children}
    </Container>
  );
}
