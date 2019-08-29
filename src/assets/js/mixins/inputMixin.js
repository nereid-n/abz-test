export default {
  data() {
    return {
      value: '',
      focus: false,
      touched: false
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    error: {
      type: String
    },
    defaultValue: {
      required: true
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
  watch: {
    defaultValue() {
      if (this.defaultValue === undefined) {
        this.value = '';
        this.touched = false;
      }
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
  }
}