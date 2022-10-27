import axios from 'axios';

// 搜索接口API
// const searchApi = axios.create({
//   baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
//   params: {
//     limit: 5,
//     Language: 'es',
//     access_token: 'pk.eyJ1IjoiZmx5MDYxOSIsImEiOiJjbDlvenNidW8wM2tzM3ZwbXF6Ym90bmF4In0.N_50Pt8qQnMM2pJxlsTyQA',
//   },
// });

const searchApi = axios.create({
  baseURL: '/api/search',
  params: {
    limit: 5,
    Language: 'es',
    access_token: 'pk.eyJ1IjoiZmx5MDYxOSIsImEiOiJjbDlvenNidW8wM2tzM3ZwbXF6Ym90bmF4In0.N_50Pt8qQnMM2pJxlsTyQA',
  },
});

export default searchApi;
