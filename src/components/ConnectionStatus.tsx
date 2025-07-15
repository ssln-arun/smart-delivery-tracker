import React, { useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks'
import { setStatus } from '../redux/slices/networkSlice';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

const ConnectionStatus: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.network.status);

  useEffect(() => {
    const connection = (navigator as any).connection;
    function updateStatus() {
      if (!navigator.onLine) dispatch(setStatus('offline'));
      else if (connection && connection.effectiveType.includes('2g')) dispatch(setStatus('slow'));
      else dispatch(setStatus('online'));
    }
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    if (connection) connection.addEventListener('change', updateStatus);
    updateStatus();
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
      if (connection) connection.removeEventListener('change', updateStatus);
    };
  }, [dispatch]);

  const getIcon = () => {
    switch (status) {
      case 'online': return <SignalCellular4BarIcon color="primary" />;
      case 'slow': return <NetworkCheckIcon color="warning" />;
      case 'offline': return <WifiOffIcon color="error" />;
      default: return <NetworkCheckIcon />;
    }
  };

  return (
    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
      {getIcon()}
      <Typography>Connection: {status.toUpperCase()}</Typography>
    </Paper>
  );
};

export default ConnectionStatus;