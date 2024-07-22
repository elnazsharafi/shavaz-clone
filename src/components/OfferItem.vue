<script>
export default {
  props: [
    "image",
    "text",
    "off",
    "title",
    "price"
  ],
}
</script>

<template>
  <v-card
      elevation="0"
      class="cursor-pointer border-s-sm rounded-0">
    <v-card-text
        class="d-inline-block text-white rounded-ts-lg rounded-be-lg  mt-1 ms-1 px-1 py-1 "
        style="background: #D72685;">
      {{ off }}
    </v-card-text>
    <v-img :src="image"></v-img>
    <v-card-text style="color: dimgray">{{ title }}</v-card-text>
    <v-card-text class=" text-left">{{ text }}</v-card-text>
    <v-card-subtitle class="text-left text-decoration-line-through">{{ price }}</v-card-subtitle>
  </v-card>
</template>