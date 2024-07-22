<script>
export default {
  props: [
    "image",
    "text",
  ],
}
</script>

<template>
  <v-card
      elevation="0"
      class="mt-10 cursor-pointer"
      width="150px">
    <v-img :src="image"></v-img>
    <v-card-text class="text-center mdi-format-size-10">{{ text }}</v-card-text>
  </v-card>
</template>