<template>
  <div class="input-wrap" :class="wrapClass">
    <div class="upload-wrap">
      <div class="upload__input input">
        <template v-if="value">
          {{value[0].name}}
        </template>
        <span v-else class="c-light-gray">{{data.label}}</span>
      </div>
      <button class="btn btn--secondary upload__btn">
        <span>Upload</span>
        <i class="icon-upload"></i>
      </button>
      <input class="upload"
             type="file"
             @change="change"
      >
    </div>
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

  export default {
    name: "InputFile",
    methods: {
      change(e) {
        this.touched = true;
        this.value = e.target.files;
        this.$emit('input', this.value);
      }
    },
    mixins: [inputMixin]
  }
</script>

<style lang="scss">
  .upload {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    &-wrap {
      position: relative;
      display: flex;
    }
    &__input {
      @include ellipsis;
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &__btn {
      &.btn {
        width: unset;
        padding: 0 31px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        @media (max-width: $md) {
          max-width: 56px;
          padding: 0 15px;
        }
      }
      i {
        display: none;
        @media (max-width: $md) {
          display: block;
        }
      }
      span {
        @media (max-width: $md) {
          display: none;
        }
      }
    }
  }
</style>