<template>
  <v-app>
    <AppBanner/>
    <AppHeader/>
    <AppSwiper/>
  </v-app>
</template>

<script>
import AppBanner from "@/components/AppBanner.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSwiper from "@/components/AppSwiper.vue";

export default {
  components: {
    AppBanner,
    AppHeader,
    AppSwiper,
  }
}
</script>