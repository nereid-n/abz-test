<template>
  <div>
    <div class="overlay" :class="{'overlay--active': show}" @click="$emit('close')"></div>
    <div class="modal" :class="{'modal--active': show}">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .modal {
    position: fixed;
    z-index: 101;
    top: 50%;
    left: 50%;
    width: 290px;
    padding: 13px 23px 20px;
    background-color: #fff;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    transition: $transition;
    &--active {
      opacity: 1;
      pointer-events: all;
    }
  }
</style>