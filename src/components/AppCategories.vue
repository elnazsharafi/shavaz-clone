<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  components: {CategoryItem},
  data: () => ({
    categoryItems: [
      {text: "آرایش چشم", imageUrl: "/images/category1.webp"},
      {text: "دهان و دندان", imageUrl: "/images/category2.webp"},
      {text: "عطر و ادکلن", imageUrl: "/images/category3.webp"},
      {text: "رنگ مو", imageUrl: "/images/category4.webp"},
      {text: "پاک کننده آرایش", imageUrl: "/images/category5.webp"},
      {text: "مایع ضدعفونی کننده", imageUrl: "/images/category6.webp"},
      {text: "لاک", imageUrl: "/images/category7.webp"},
      {text: "لوسیون و روغن بدن", imageUrl: "/images/category8.webp"},
      {text: "آرایش لب", imageUrl: "/images/category9.webp"},
      {text: "ماسک مو", imageUrl: "/images/category10.webp"},
      {text: "ضدتعریق", imageUrl: "/images/category11.webp"},
      {text: "نواربهداشتی", imageUrl: "/images/category12.webp"},
      {text: "آرایش صورت", imageUrl: "/images/category13.webp"},
      {text: "دستمال مرطوب", imageUrl: "/images/category14.webp"},
    ]
  })
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
