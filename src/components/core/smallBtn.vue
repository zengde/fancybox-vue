<template>
  <button
    type="button"
    data-fancybox-close
    class="fancybox-button fancybox-close-small"
    :title="$t('CLOSE')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
      <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
    </svg>
  </button>
</template>
<script>
export default {
  name: "smallBtn"
};
</script>
