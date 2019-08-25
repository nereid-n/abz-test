<template>
  <div class="select-wrap" :class="wrapClass">
    <div class="select" :class="{'select--active': open}">
      <div class="select__input" @click="openSelect">
        <template v-if="value === ''">
          {{data.label}}
        </template>
        <span class="selected" v-else>
        {{value.name}}
      </span>
        <i class="select__caret icon-caret-down"></i>
      </div>
      <div v-if="open" class="select__menu">
        <div v-for="item in data.options"
             class="select__item"
             @click="input(item)"
        >
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="input__hint">
      <template v-if="error && touched">Error</template>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../assets/js/mixins/inputMixin';

  export default {
    name: "InputSelect",
    data() {
      return {
        open: false,
        countClick: 0
      }
    },
    methods: {
      openSelect() {
        if (!this.open) {
          this.open = true;
        }
      },
      closeSelect () {
        if (this.open) {
          if (this.countClick > 0) {
            this.open = false;
            this.countClick = 0;
          }
          else {
            this.countClick++;
          }
        }
      },
      input(data) {
        this.touched = true;
        this.value = data;
        this.$emit('input', this.value.value);
      }
    },
    mounted() {
      document.onclick = this.closeSelect;
    },
    mixins: [inputMixin]
  }
</script>

<style lang="scss">
  .select {
    @include inputBorder();
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: $heightInput;
    background-color: #fff;
    &-wrap {
      position: relative;
      z-index: 10;
      padding-top: $heightInput;
    }
    &--active {
      box-shadow: $shadow;
      .select {
        &__caret {
          opacity: 0;
        }
      }
    }
    &__input {
      @include ellipsis;
      position: relative;
      z-index: 10;
      padding: $paddingInputY $paddingInputX;
      padding-right: 40px;
      cursor: pointer;
    }
    &__caret {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }
    &__menu {
      width: 100%;
      overflow: hidden;
    }
    &__item {
      color: #393939;
      padding: $paddingInputY $paddingInputX;
      cursor: pointer;
      transition: $transition;
      &:hover {
        background-color: $secondaryHover;
      }
    }
  }

  .selected {
    color: $primary;
  }
</style>