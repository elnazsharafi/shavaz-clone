<script>
export default {
  data: () => ({
    bannerOff: [
      {imageUrl: "/images/bishtarin takhfif.webp"},
      {imageUrl: "/images/porfrosh tarin.webp"},
    ]
  }),
}
</script>

<template>
  <v-sheet
      class=" d-flex justify-space-evenly align-center mt-10"
  >
    <router-link to="" class=" cursor-pointer"
                 v-for="item in bannerOff"
                 :key="item.imageUrl"
    >
      <v-img :src="item.imageUrl" width="635px" class="rounded-lg"></v-img>
    </router-link>
  </v-sheet>
</template>
