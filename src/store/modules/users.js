import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    newUser: false
  },
  mutations: {
    'NEW_USER': (state, value) => state.newUser = value
  },
  actions: {
    'TOKEN': async () => {
      return await Vue.http.get(`${process.env.VUE_APP_API_URL}token`)
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
    'USER': async (context, params) => {
      return await Vue.http.get(`${process.env.VUE_APP_API_URL}users/${params.id}`)
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
    'USERS': async (context, params) => {
      return await Vue.http.get(`${process.env.VUE_APP_API_URL}users`, {params: params})
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
    'ADD_USER': async (context, params) => {
      return await Vue.http.post(`${process.env.VUE_APP_API_URL}users`, params.data, {headers: params.headers})
        .then(
          res => {
            return res;
          },
          err => {
            return err;
          }
        )
        .catch(err => console.error(`catch, ${err}`));
    },
  }
}