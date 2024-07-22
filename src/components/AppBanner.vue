<script>
export default {
  data: () => ({
    banner: null,
  }),
  mounted() {
    fetch('http://localhost:8000/api/promotion-banner')
        .then(response => response.json())
        .then(banner => this.banner = banner)
        .catch(err => console.log(err.message))
  }
}
</script>
<template>
  <v-sheet v-if="banner">
    <a class="fixed-banner d-block" id="top-banner" href="https://shavaz.com/">
      <img
          :src="banner.imageUrl"
          class="w-100 h-100" alt="free delivery" width="1400" height="64" title="free delivery">
    </a>
  </v-sheet>
</template>

<style scoped>
.fixed-banner {
  height: 64px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 11;
}
</style>