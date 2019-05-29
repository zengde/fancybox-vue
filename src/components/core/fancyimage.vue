<template>
  <div class="fancybox-slide--image fancybox-slide--complete">
    <div class="fancybox-content" :style="style">
      <img ref="image" :src="item.src" class="fancybox-image" @load="load" @error="error">
    </div>
  </div>
</template>
<script>
export default {
  name: "fancyImage",
  props: ["item"],
  computed: {},
  data() {
    return {
      style: {}
    };
  },
  methods: {
    setTranslate() {
      let image = this.$refs.image;
      let width = image.naturalWidth;
      let height = image.naturalHeight;
      let left = (window.innerWidth - width) * 0.5;
      let top = (window.innerHeight - height) * 0.5;
      this.style = {
        transform: `translate(${left}px, ${top}px)`,
        width: `${width}px`,
        height: `${height}px`
      };
    },
    load(e) {
      this.setTranslate();
      this.$emit("afterLoad");
    },
    error() {
      this.$emit("error");
    }
  }
};
</script>
