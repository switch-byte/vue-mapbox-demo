import { MapState } from './map/state';
import { PlacesState } from './places/state';
import { createStore } from 'vuex';
import mapModule from './map';
import placesModule from './places';

export interface StateInterface {
  map: MapState;
  places: PlacesState;
}

export default createStore<StateInterface>({
  modules: {
    map: mapModule,
    places: placesModule,
  },
});
