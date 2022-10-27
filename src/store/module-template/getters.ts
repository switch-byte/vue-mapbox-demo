import { ExampleStateInterface } from './state';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
