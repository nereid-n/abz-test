<template>
  <div class="input-wrap" :class="wrapClass">
    <div class="input__placeholder">{{data.label}}</div>
    <imask-input class="input"
           :placeholder="focus ? data.placeholder : ''"
                 :mask="focus ? '+{38}(\\000)000 00 00' : ''"
           @focus="focus = true"
           @blur="onBlur"
           @input="onInput"
           v-model="value"
    />
    <div class="input__hint">
      <template v-if="error && touched">{{error}}</template>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../assets/js/mixins/inputMixin';
  import {IMaskComponent} from 'vue-imask';

  export default {
    name: "InputMask",
    components: {
      'imask-input': IMaskComponent
    },
    mixins: [inputMixin]
  }
</script>