import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setCurrent, enqueueLocation } from '../redux/slices/locationSlice';
import { getAddressFromCoordinates } from '../utils/reverseGeocode';

const LocationTracker: React.FC = () => {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.location.current);
  const queue = useAppSelector((state) => state.location.queue);

  const [address, setAddress] = useState<string>('');
  const [accuracy, setAccuracy] = useState<number | null>(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude: lat, longitude: lng, accuracy } = pos.coords;

        if (accuracy > 1000) {
          console.warn('⚠️ Location accuracy is low:', accuracy, 'meters');
        }

        setAccuracy(accuracy);
        dispatch(setCurrent({ lat, lng }));

        if (!navigator.onLine) {
          dispatch(enqueueLocation({ lat, lng }));
        }
      },
      (err) => console.error(err),
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [dispatch]);

  useEffect(() => {
    if (current) {
      getAddressFromCoordinates(current.lat, current.lng).then(setAddress);
    }
  }, [current]);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Current Location</Typography>

      {current ? (
        <Box mt={1}>
          <Typography>Latitude: {current.lat.toFixed(5)}</Typography>
          <Typography>Longitude: {current.lng.toFixed(5)}</Typography>

          <Typography mt={1} variant="body2" color="text.secondary">
            Address: {address}
          </Typography>

          {accuracy !== null && accuracy > 1000 && (
            <Typography mt={1} color="warning.main">
              ⚠️ Low GPS Accuracy: {Math.round(accuracy)} meters
            </Typography>
          )}

          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => window.location.reload()}
          >
            Refresh Location
          </Button>
        </Box>
      ) : (
        <Typography>Fetching location...</Typography>
      )}

      {queue.length > 0 && (
        <Typography mt={2}>Unsynced points: {queue.length}</Typography>
      )}
    </Paper>
  );
};

export default LocationTracker;