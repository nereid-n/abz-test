import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import users from './modules/users';
import positions from './modules/positions';

export default new Vuex.Store({
  modules: {
    users,
    positions
  },
  strict: process.env.NODE_ENV !== 'production'
})
