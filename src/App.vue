<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    HelloWorld,
    AppFooter,
  }
}
</script>