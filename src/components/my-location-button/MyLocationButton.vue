<template>
  <button v-if="isButtonReady" class="btn btn-primary" @click="onMyLocationClicked">返回我所属的机构</button>
</template>

<script lang="ts">
import { useMap, usePlaces } from '@/composables';
import { defineComponent } from '@vue/runtime-core';
import { computed } from 'vue';

export default defineComponent({
  name: 'MyLocationButton',
  setup() {
    const { userLocation, isUserLocationReady } = usePlaces();
    const { map, isMapReady } = useMap();

    return {
      isButtonReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

      onMyLocationClicked: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14,
        });
      },
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  right: 30px;
  top: 30px;
}
</style>
