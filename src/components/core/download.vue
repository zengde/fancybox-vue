<template>
  <a
    download
    data-fancybox-download
    class="fancybox-button fancybox-button--download"
    :title="$t('DOWNLOAD')"
    :href="$parent.current.src"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"
      ></path>
    </svg>
  </a>
</template>
<script>
export default {
  name: "download"
};
</script>
