<script>
import AppBanner from "@/components/AppBanner.vue";
import AppProposal from "@/components/AppProposal.vue";
import AppSwiper from "@/components/AppSwiper.vue";
import AppBannerOff from "@/components/AppBannerOff.vue";
import AppSurprise from "@/components/AppSurprise.vue";
import AppCategories from "@/components/AppCategories.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'HomeView',
  components: {
    AppFooter,
    AppBanner,
    AppHeader,
    AppCategories,
    AppSurprise,
    AppBannerOff,
    AppSwiper,
    AppProposal,
  }
}
</script>

<template>
  <AppBanner/>
  <AppHeader/>
  <AppSwiper/>
  <AppSurprise/>
  <AppCategories/>
  <AppBannerOff/>
  <AppProposal/>
  <AppFooter/>
</template>
