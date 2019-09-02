import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import {Validator} from 'vee-validate';
import dotsMixin from './assets/js/mixins/dotsMixin';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VeeValidate, {
  events: 'change|blur|input'
});

Vue.mixin(dotsMixin);
Vue.mixin({
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    errorImg(item) {
      item.photo = `${this.publicPath}/img/no-img.jpg`;
    }
  }
});

const minDimensionsRule = {
  getMessage(field, [width, height], data) {
    return (data && data.message) || `The ${field} field must be UP TO ${width} pixels by ${height} pixels.`;
  },
  validate(files, [width, height]) {
    const validateImage = (file, width, height) => {
      const URL = window.URL || window.webkitURL;
      return new Promise(resolve => {
        const image = new Image();
        image.onerror = () => resolve({ valid: false });
        image.onload = () => resolve({
          valid: image.width >= Number(width) && image.height >= Number(height) // only change from official rule
        });

        image.src = URL.createObjectURL(file);
      });
    };
    const list = [];
    for (let i = 0; i < files.length; i++) {
      // if file is not an image, reject.
      if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
        return false;
      }
      list.push(files[i]);
    }
    return Promise.all(list.map(file => validateImage(file, width, height)));
  }
};

Validator.extend('minDimensions', minDimensionsRule);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
