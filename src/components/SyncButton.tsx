import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks'
import { clearQueue } from '../redux/slices/locationSlice';

const SyncButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const queue = useAppSelector((state) => state.location.queue);
  const synced = useAppSelector((state) => state.location.synced);

  const handleSync = () => {
    console.log('Syncing', queue);
    setTimeout(() => dispatch(clearQueue()), 1000);
  };

  return (
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      {synced ? (
        <Typography>All locations synced</Typography>
      ) : (
        <Button variant="contained" onClick={handleSync}>
          Sync Locations ({queue.length})
        </Button>
      )}
    </Paper>
  );
};

export default SyncButton;