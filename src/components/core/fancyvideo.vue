<template>
  <video class="fancybox-video" controls controlslist="nodownload" :poster="poster">
    <source :src="src" :type="format">Sorry, your browser doesn't support embedded videos,
    <a :href="src">download</a> and watch with your favorite video player!
  </video>
</template>
<script>
export default {
  name: "fancyVideo",
  data() {
    return {
      src: null,
      format: null,
      poster: null
    };
  }
};
</script>
