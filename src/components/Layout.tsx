import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import ConnectionStatus from './ConnectionStatus';
import LocationTracker from './LocationTracker';
import SyncButton from './SyncButton';

const Layout: React.FC = () => (
  <Box
    sx={{
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: '#f5f5f5',
    }}
  >
    <Header />
    <Box
      sx={{
        flex: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <ConnectionStatus />
      <LocationTracker />
      <SyncButton />
    </Box>
  </Box>
);

export default Layout;