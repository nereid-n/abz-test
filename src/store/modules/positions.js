import Vue from 'vue';

export default {
  namespaced: true,
  actions: {
    'POSITIONS': async () => {
      return await Vue.http.get(`${process.env.VUE_APP_API_URL}positions`)
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