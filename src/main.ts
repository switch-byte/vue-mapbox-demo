import App from './App.vue';
import { createApp } from 'vue';
import mapboxgl from 'mapbox-gl';
import router from './router';
import store from './store';
import '@/mock/mock'

mapboxgl.accessToken = 'pk.eyJ1IjoiZmx5MDYxOSIsImEiOiJjbDlvenNidW8wM2tzM3ZwbXF6Ym90bmF4In0.N_50Pt8qQnMM2pJxlsTyQA';

if (!navigator.geolocation) {
  throw new Error('Browser does not support Geolocation');
}

createApp(App).use(store).use(router).mount('#app');
