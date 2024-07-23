<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  components: {CategoryItem},
  data: () => ({
    categoryItems: [],
  }),
  mounted() {
    fetch('http://localhost:8000/api/category-items')
        .then(response => response.json())
        .then(items => this.categoryItems = items)
        .catch(err => console.log(err.message))
  }
}
</script>

<template>
  <v-container>
    <header class="text-center mt-10"><h1>دسته بندی ها</h1></header>
    <v-sheet class="v-container d-flex flex-wrap justify-space-between align-content-space-around">
      <CategoryItem
          v-for="item in categoryItems"
          :image="item.imageUrl"
          :text="item.text"
          :key="item.imageUrl"
      />
    </v-sheet>
  </v-container>
</template>
