import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiZmx5MDYxOSIsImEiOiJjbDlvenNidW8wM2tzM3ZwbXF6Ym90bmF4In0.N_50Pt8qQnMM2pJxlsTyQA',
  },
});

export default directionsApi;
