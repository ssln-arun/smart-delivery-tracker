import axios from 'axios';

export const getAddressFromCoordinates = async (lat: number, lon: number): Promise<string> => {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        format: 'jsonv2',
        lat,
        lon,
      },
    });
    return response.data.display_name || 'Unknown location';
  } catch (error) {
    console.error('Error fetching address:', error);
    return 'Unable to fetch address';
  }
};