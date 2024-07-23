<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  components: {VueCountdown},
  data() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    return {
      time: newYear - now,
      surpriseItems :[],
      // swiperItems: [
      //   {off: "10%", imageUrl: "/images/surprise3.webp", text: "143,500تومان"},
      //   {off: "40%", imageUrl: "/images/surprise4.webp", text: "83,000تومان"},
      //   {off: "30%", imageUrl: "/images/surprise5.webp", text: "120,000تومان"},
      //   {off: "10%", imageUrl: "/images/surprise6.webp", text: "50,500تومان"},
      //   {off: "20%", imageUrl: "/images/surprise7.webp", text: "63,700تومان"},
      //   {off: "15%", imageUrl: "/images/surprise2.webp", text: "82,900تومان"},
      //   {off: "50%", imageUrl: "/images/surprise8.webp", text: "72,500تومان"},
      //   {off: "30%", imageUrl: "/images/surprise9.webp", text: "190,500تومان"},
      //   {off: "15%", imageUrl: "/images/surprise1.webp", text: "80,000تومان"},
      // ]
    }
  },
  mounted() {
    fetch('http://localhost:8000/api/surprise-items')
        .then(response => response.json())
        .then(items => this.surpriseItems = items)
        .catch(err => console.log(err.message))
  }
}
</script>

<template>
  <v-sheet class="v-container mt-16 d-flex rounded-lg bk-pink" >
    <v-sheet class="d-flex flex-column v-col-2 align-center justify-center text-white bk-pink">
      <VueCountdown :time="time" v-slot="{ days, hours, minutes, seconds }">
        {{ seconds }} : {{ minutes }} : {{ hours }} : {{ days }}
      </VueCountdown>
      <v-img src="/images/box.png" width="120"></v-img>
      <v-sheet class="text-center  text-white bk-pink">سوپرایز روز</v-sheet>
      <v-btn class="mt-5" variant="outlined">مشاهده همه</v-btn>
    </v-sheet>
    <swiper-container
        class="v-col-10 bk-pink"

        navigation="true"
        :breakpoints="{
          '769': {
            slidesPerView: 5,
          },
        }"
    >
      <!--      :navigation="{-->
      <!--      nextEl: '.swiper-button-next',-->
      <!--      prevEl: '.swiper-button-prev',-->
      <!--      }"-->
      <swiper-slide
          v-for="item in surpriseItems"
          :key="item.imageUrl"
      >
        <v-card
            class="rounded-lg"
            elevation="0"
            width="180px"
        >
          <v-card-text
              class="d-inline-block text-white rounded-ts-lg rounded-be-lg  mt-1 ms-1 px-1 py-1 "
              style="background: #D72685;">
            {{ item.off }}
          </v-card-text>
          <v-img :src="item.imageUrl"></v-img>
          <v-card-text class="text-left mdi-format-size-10">{{ item.text }}</v-card-text>
        </v-card>
      </swiper-slide>
      <!--      <v-btn icon="mdi-chevron-left" class="swiper-button-prev"></v-btn>-->
      <!--      <v-btn icon="mdi-chevron-right" class="swiper-button-next"></v-btn>-->
    </swiper-container>
  </v-sheet>
</template>

<style scoped>
.swiper-button-next, .swiper-button-prev {
  background: #fff !important;
  border: 1px solid #9e9e9e !important;
  border-radius: 50% !important;
  height: 40px !important;
  width: 40px !important;
}

.swiper-button-next:after, .swiper-button-prev:after {
  color: #d72685 !important;
  font-size: 15px !important;
}
.bk-pink{
  background: rgb(246,39,99)
}
</style>