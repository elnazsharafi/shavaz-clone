<script>
import {register} from 'swiper/element/bundle';

register();

export default {
  data: () => ({
    swiperItems: [],
  }),
  setup() {
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress, swiper)
    };

    const onSlideChange = (e) => {
      console.log('slide changed', e)
    }

    return {
      onProgress,
      onSlideChange,
    };
  },
  mounted() {
    fetch('http://localhost:8000/api/swiper-items')
        .then(response => response.json())
        .then(items => this.swiperItems = items)
        .catch(err => console.log(err.message))
  },
}
</script>

<template>
  <swiper-container
      class="swiper"
      :loop="true"
      :slides-per-view="1"
      :centered-slides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 1,
        },
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
  >
    <swiper-slide
        class="swiper-item"
        v-for="item in swiperItems"
        :key="item.imageUrl"
    >
      <router-link :to="item.path">
        <v-img cover :src="item.imageUrl"/>
      </router-link>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-item {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-item a {
  width: 100%;
  height: 100%;
}

.swiper-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>