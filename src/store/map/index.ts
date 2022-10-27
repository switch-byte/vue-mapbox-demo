import state, { MapState } from './state';

import { Module } from 'vuex';
import { StateInterface } from '../index';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const mapModule: Module<MapState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default mapModule;
