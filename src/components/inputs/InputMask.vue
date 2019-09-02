<template>
  <div class="input-wrap" :class="wrapClass">
    <div class="input__placeholder">{{data.label}}</div>
    <imask-input class="input"
                 :placeholder="focus ? data.placeholder : ''"
                 :mask="focus ? data.mask : ''"
                 :type="data.type || 'text'"
                 @focus="focus = true"
                 @blur="onBlur"
                 @input="onInput"
                 v-model="value"
    />
    <div v-if="error && touched" class="input__error">
      {{error}}
    </div>
    <div v-else class="input__hint">
      {{data.hint}}
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