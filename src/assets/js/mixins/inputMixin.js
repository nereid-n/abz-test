export default {
  data() {
    return {
      value: '',
      focus: false,
      touched: false
    }
  },
  methods: {
    onBlur() {
      this.focus = false;
      this.touched = true;
      this.$emit('blur');
    },
    onInput() {
      this.$emit('input', this.value);
    }
  },
  computed: {
    wrapClass() {
      return {
        'input--active': this.focus,
        'input--filled': this.value !== '',
        'input--error': this.error && this.touched
      };
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    error: {
      type: Boolean
    }
  }
}