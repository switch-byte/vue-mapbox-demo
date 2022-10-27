<template>
  <div v-if="distance" class="trip-container column">
    <div class="col">
      Distance: <strong>{{ distance }} kms</strong>
    </div>
    <div class="col">
      Duration: <strong>{{ duration }} mins</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { useMap } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TripDetails',
  setup() {
    const { distance, duration } = useMap();

    return {
      distance,
      duration,
    };
  },
});
</script>

<style scoped>
.trip-container {
  background-color: white;
  border-radius: 10px;
  bottom: 50px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 25px;
  left: 20px;
  padding: 10px;
  position: fixed;
  width: 350px;
}

strong {
  color: #42b983;
}
</style>
