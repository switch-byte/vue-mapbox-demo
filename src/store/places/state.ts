import { Feature } from '@/interfaces/places';
export interface PlacesState {
  isLoading: boolean;
  places: Feature[];
  userLocation?: [number, number]; // lng, lat
  isLoadingPlaces: boolean;
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
    places: [],
    isLoadingPlaces: false,
  };
}

export default state;
