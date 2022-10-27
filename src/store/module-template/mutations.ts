import { ExampleStateInterface } from './state';
import { MutationTree } from 'vuex';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
};

export default mutation;
