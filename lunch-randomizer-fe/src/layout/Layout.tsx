import { Box, Container } from '@mui/material';
import TopNav from './TopNav';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <TopNav />

      {/* Main Container */}
      <Box
        component='main'
        sx={{ flexGrow: 1, overflow: 'auto', width: '100%', height: 'auto'}}
      >
        <Container sx={{ mt: 10, mb: 10 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
