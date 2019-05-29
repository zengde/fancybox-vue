<template>
  <button
    data-fancybox-next
    class="fancybox-button fancybox-button--arrow_right"
    :title="$t('NEXT')"
    @click="$parent.next"
  >
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"></path>
      </svg>
    </div>
  </button>
</template>
<script>
export default {
  name: "arrowRight"
};
</script>
