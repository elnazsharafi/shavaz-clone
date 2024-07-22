<script>
import AppBanner from "@/components/AppBanner.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSwiper from "@/components/AppSwiper.vue";
import AppCategories from "@/components/AppCategories.vue";
import AppBannerOff from "@/components/AppBannerOff.vue";
import AppProposal from "@/components/AppProposal.vue";
import AppSurprise from "@/components/AppSurprise.vue";
import AppFooter from "@/components/AppFooter.vue";


export default {
  components: {
    AppFooter,
    AppSurprise,
    AppProposal,
    AppBannerOff,
    AppBanner,
    AppHeader,
    AppSwiper,
    AppCategories,
  }
}
</script>

<template>
  <v-app>
    <AppBanner/>
    <AppHeader/>
    <AppSwiper/>
    <AppSurprise/>
    <AppCategories/>
    <AppBannerOff/>
    <AppProposal/>
    <AppFooter/>
  </v-app>
</template>