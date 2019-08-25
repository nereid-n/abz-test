export default {
  methods: {
    dots(el, size) {
      let text = el.innerText;
      if (text.length > size) {
        el.innerText = text.slice(0, size) + '...';
      }
    }
  }
}