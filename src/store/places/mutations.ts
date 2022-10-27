import { Feature } from '@/interfaces/places';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';

export const MUTATIONS = {
  SET_LNG_LAT: 'setLngLat',
};

const mutation: MutationTree<PlacesState> = {
  setLngLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
    state.userLocation = [lng, lat];
    state.isLoading = false;
  },

  setIsLoadingPlace(state: PlacesState) {
    state.isLoadingPlaces = true;
  },

  setPlaces(state, places: Feature[]) {
    state.places = places;
    state.isLoadingPlaces = false;
  },
};

export default mutation;
