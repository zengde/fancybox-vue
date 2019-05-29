<template>
  <iframe
    :id="`fancybox-frame${rnd}`"
    :name="`fancybox-frame${rnd}`"
    class="fancybox-iframe"
    allowfullscreen="allowfullscreen"
    allow="autoplay; fullscreen"
    src
  ></iframe>
</template>
<script>
export default {
  name: "fancyIframe",
  computed: {
    rnd() {
      return "";
    }
  }
};
</script>
