<template>
  <button v-if="isButtonReady" class="btn btn-primary" @click="onHomeClicked">首页</button>
</template>

<script lang="ts">
import { useMap, usePlaces } from '@/composables';
import { defineComponent } from '@vue/runtime-core';
import { computed } from 'vue';

export default defineComponent({
  name: 'HomeButton',
  setup() {
    const { userLocation, isUserLocationReady } = usePlaces();
    const { map, isMapReady } = useMap();

    return {
      isButtonReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

        onHomeClicked: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 1.5,
        });
      },
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  right: 210px;
  top: 30px;
}
</style>
