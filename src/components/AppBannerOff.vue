<script>
export default {
  data: () => ({
    discountBanners: [],
  }),
  mounted() {
    fetch('http://localhost:8000/api/discount-banners')
        .then(response => response.json())
        .then(banners => this.discountBanners = banners)
        .catch(err => console.log(err.message))
  }
}
</script>

<template>
  <v-sheet
      class=" d-flex justify-space-evenly align-center mt-10"
  >
    <router-link to="" class=" cursor-pointer"
                 v-for="item in discountBanners"
                 :key="item.imageUrl"
    >
      <v-img :src="item.imageUrl" width="635px" class="rounded-lg"></v-img>
    </router-link>
  </v-sheet>
</template>
