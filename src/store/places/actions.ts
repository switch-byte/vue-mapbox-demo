import { Feature, PlacesResponse } from '@/interfaces/places';

import { ActionTree } from 'vuex';
import { MUTATIONS } from './mutations';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      // ({ coords }) => commit(MUTATIONS.SET_LNG_LAT, { lng: coords.longitude, lat: coords.latitude }),
      ({ coords }) => commit(MUTATIONS.SET_LNG_LAT, {lng: 104.065735, lat:30.659462}),
      (error) => {
        // console.error(error);
        // throw new Error('No geolocation :(');
        commit(MUTATIONS.SET_LNG_LAT, {lng: 104.065735, lat:30.659462})
      },
    );
  },

  async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {
    if (query.length === 0) {
      commit('setPlaces', []);
      return [];
    }

    if (!state.userLocation) {
      throw new Error('There no user location');
    }

    // 获取搜索信息
    // const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
    //   params: {
    //     proximity: state.userLocation?.join(','),
    //   },
    // });

    // 获取搜索信息
    const response = await searchApi.get<PlacesResponse>(`/org`, {
      params: {
        proximity: state.userLocation?.join(','),
      },
    });

    commit('setPlaces', response.data.features);

    return response.data.features;
  },
};

export default actions;
