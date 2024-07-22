<script>
import {useGoTo} from "vuetify"

export default {
  setup() {
    const goTo = useGoTo()
    return {
      goTo,
    }
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    footerItems1: [
      {name: "لوازم آرایشی"},
      {name: "مراقبت ازپوست"},
      {name: "بهداشت خانگی"},
      {name: "مراقبت از کودک"},
      {name: "لوازم بهداشتی"},
    ],
    footerItems2: [
      {name: "درباره ما"},
      {name: "تماس با ما"},
      {name: "سوال های متداول"},
      {name: "فرصت های شغلی"},
      {name: "فروشنده شوید"},
    ],
    footerItems3: [
      {name: "نحوه ثبت سفارش"},
      {name: "روش های پرداخت"},
      {name: "شیوه های ارسال"},
      {name: "شرایط مرجوعی"}
    ],
  }),
}
</script>

<template>
  <v-container class="mt-16">
    <v-sheet>
      <v-divider>
        <img src="../assets/images/logo.svg" alt="Shavaz Logo" width="107" height="38" title="Shavaz Logo">
      </v-divider>
      <v-btn @click="this.goTo(0)" variant="text" class="float-left" append-icon="mdi-arrow-up-thin">بازگشت به
        بالا
      </v-btn>
    </v-sheet>
    <v-footer class="d-flex mt-10">
      <v-sheet class="d-flex v-col-6 justify-space-between mr-0">
        <ul>
          <h3>دسترسی سریع</h3>
          <li v-for="item in footerItems1" :key="item">
            <router-link to="#">{{ item.name }}</router-link>
          </li>
        </ul>
        <ul>
          <h3>درباره شاواز</h3>
          <li v-for="item in footerItems2" :key="item">
            <router-link to="#">{{ item.name }}</router-link>
          </li>
        </ul>
        <ul>
          <h3>راهنما خرید</h3>
          <li v-for="item in footerItems3" :key="item">
            <router-link to="#">{{ item.name }}</router-link>
          </li>
        </ul>
      </v-sheet>
      <v-sheet class="flex v-col-6 mr-16 mt-0">
        <v-sheet>
          <v-sheet>باما در ارتباط باشید</v-sheet>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              class="mx-4"
              variant="text"
          ></v-btn>
        </v-sheet>
        <v-sheet class="mt-10" style="font-size: 14px">
          برای اطلاع از آخرین تخفیف ها ایمیل خود را وارد کنید.
        </v-sheet>
        <v-text-field
            class="mt-5"
            placeholder="ثبت ایمیل"
            variant="solo-filled"
            density="compact"
            hide-details
            single-line>
          <template v-slot:append-inner>
            <v-icon>mdi-email-outline</v-icon>
          </template>
        </v-text-field>
      </v-sheet>
    </v-footer>
    <v-sheet class="mt-10" style="font-size: 14px">پشتیبانی شاواز:۹ ۱۰۳۲۳۴۳-۰۲۱
      | شنبه تا چهارشنبه از ساعت ۹ الی ۲۴ و پنجشنبه ها از ۹ الی ۲۲.
    </v-sheet>
    <v-sheet class="text-center mt-5" style="font-size: 12px">استفاده از مطالب فروشگاه اینترنتی شاواز فقط برای مقاصد
      غیرتجاری
      و باذکر
      منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت سلامت آوران یزدان نفیس می باشد.
    </v-sheet>
  </v-container>
</template>

<style scoped>
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #9e9e9e;
}
</style>