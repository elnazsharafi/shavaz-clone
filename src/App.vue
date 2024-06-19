<template>
  <v-app>
    <AppBanner/>
    <AppHeader/>
  </v-app>
</template>

<script>
import AppBanner from "@/components/AppBanner.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppBanner,
    AppHeader,
  }
}
</script>