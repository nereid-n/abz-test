<template>
  <div class="input-wrap" :class="wrapClass">
    <div class="input__placeholder">{{data.label}}</div>
    <input class="input"
           :placeholder="focus ? data.placeholder : ''"
           @focus="focus = true"
           @blur="onBlur"
           @input="onInput"
           v-model="value"
    >
    <div class="input__hint">
      <template v-if="error && touched">{{error}}</template>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../assets/js/mixins/inputMixin';

  export default {
    name: "InputText",
    mixins: [inputMixin]
  }
</script>

<style lang="scss">
  .input {
    @include inputBorder;
    width: 100%;
    height: $heightInput;
    padding: $paddingInputY $paddingInputX;
    font: inherit;
    &-wrap {
      position: relative;
    }
    &__hint {
      min-height: 21px;
      padding: 3px $paddingInputX;
      color: $lightGray;
      font-size: 12px;
    }
    &__placeholder {
      $placeholderPaddingLeft: 3px;
      position: absolute;
      top: $paddingInputY;
      left: $paddingInputX;
      display: inline-block;
      margin-left: -$placeholderPaddingLeft;
      padding-left: $placeholderPaddingLeft;
      padding-right: 5px;
      color: $lightGray;
      background-color: #fff;
      pointer-events: none;
      transition: $transition;
    }
    &--filled {
      .input {
        &__placeholder {
          top: -7px;
          font-size: 12px;
        }
      }
    }
    &--active {
      .input {
        padding: $paddingInputY - 1px $paddingInputX - 1px;
        border-width: 2px;
        &__placeholder {
          top: -7px;
          font-size: 12px;
        }
      }
    }
    &--error {
      .input,
      .select {
        border-color: $error;
        &__hint,
        &__placeholder {
          color: $error
        }
      }
    }
  }
</style>