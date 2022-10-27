import { ActionTree } from 'vuex';
import { DirectionsResponse } from '@/interfaces/directions';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/apis';

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
  async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat; end: LngLat }) {
    const response = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`);

    commit('setDistanceDuration', {
      distance: response.data.routes[0].distance,
      duration: response.data.routes[0].duration,
    });

    commit('setRoutePolyline', response.data.routes[0].geometry.coordinates);
  },
};

export default actions;
