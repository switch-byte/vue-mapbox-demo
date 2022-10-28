import { defineComponent, onMounted, ref, watch } from 'vue';
import { useMap, usePlaces } from '@/composables';

import Mapboxgl from 'mapbox-gl';

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlaces();
    const { setMap } = useMap();

    const initMap = async () => {
      if (!mapElement.value) throw new Error('Container does not exist');
      if (!userLocation.value) throw new Error('User location does not exist');

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value,
        // 默认风格-3D
        // style: 'mapbox://styles/fly0619/cl9p28vct002m14p0t0bjhp2i',
        // blue 地球-3D
        // style: 'mapbox://styles/fly0619/cl9ppw2r7000o15nwddv49c7j',
        // 平铺风格-2D
        style:'mapbox://styles/fly0619/cl9s4gpun007h14p07g9846ub',
        center: userLocation.value,
        // zoom: 15,
        // 设置缩放级别，对应缩放级别可以看到（0:地球、3:一个大陆、4:大岛、6:大河流、10:大型道路、15:建筑物）
        // 3D风格 zoom
        // zoom: 1.5,
        zoom: 1.5,
        // 最小缩放级别（平铺风格-2D）
        minZoom: 1.5,
        // 最大缩放级（平铺风格-2D）
        maxZoom: 15
      });

      const myLocationPopUp = new Mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
				<h4>Here I am</h4>
				<p>Currently in Valencia</p>
			`);

      new Mapboxgl.Marker().setLngLat(userLocation.value).setPopup(myLocationPopUp).addTo(map);
      setMap(map);

      // At low zooms, complete a revolution every two minutes.
      const secondsPerRevolution = 120;
      // Above zoom level 5, do not rotate.
      const maxSpinZoom = 5;
      // Rotate at intermediate speeds between zoom levels 3 and 5.
      const slowSpinZoom = 3;

      let userInteracting = false;
      // let spinEnabled = true;

      function spinGlobe() {
        const zoom = map.getZoom();
        // if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        if (!userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution;
          if (zoom > slowSpinZoom) {
            // Slow spinning at higher zooms
            const zoomDif =
              (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
          }
          const center = map.getCenter();
          center.lng -= distancePerSecond;
          // Smoothly animate the map over one second.
          // When this animation is complete, it calls a 'moveend' event.
          map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      }

      // Pause spinning on interaction
      map.on('mousedown', () => {
        userInteracting = true;
      });

      // Restart spinning the globe when interaction is complete
      map.on('mouseup', () => {
        userInteracting = false;
        spinGlobe();
      });

      // These events account for cases where the mouse has moved
      // off the map, so 'mouseup' will not be fired.
      map.on('dragend', () => {
        userInteracting = false;
        spinGlobe();
      });
      map.on('pitchend', () => {
        userInteracting = false;
        spinGlobe();
      });
      map.on('rotateend', () => {
        userInteracting = false;
        spinGlobe();
      });

      // When animation is complete, start spinning if there is no ongoing interaction
      map.on('moveend', () => {
        spinGlobe();
      });

      spinGlobe();
    };

    onMounted(() => {
      if (isUserLocationReady.value) initMap();
    });

    watch(isUserLocationReady, (newValue) => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
