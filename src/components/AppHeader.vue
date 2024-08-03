<script>
import {it} from "vuetify/locale";

export default {
  computed: {
    it() {
      return it
    }
  },
  data: () => ({
    isLoggedIn: Boolean(localStorage.getItem('auth-token')),
    mobile: localStorage.getItem('user-mobile'),
    menuItems: [
      {title: 'دسته‌بندی‌ها', path: '/home', icon: 'mdi-menu'},
      {title: 'پرفروش ترین های هفته', path: '/home', icon: 'mdi-lightning-bolt-outline'},
      {title: 'محصولات تخفیف دار', path: '/signup', icon: 'mdi-sale-outline'},
      {title: 'بلاگ', path: '/signup', icon: 'mdi-post-outline'},
      {title: 'تماس با ما', path: '/signin', icon: 'mdi-phone-outline'},
      {title: 'درباره ما', path: '/signin', icon: 'mdi-storefront-outline'},
    ],
    actionItems: [
      {icon: 'mdi-heart-outline', path: '/signup'},
      {icon: 'mdi-cart-minus', path: '/signup'},
    ],
    profileItems: [
      {title: 'لیست سفارشات', path: '/', icon: 'mdi-cart-minus'},
      {title: 'علاقمندی‌ها', path: '/', icon: 'mdi-heart-outline'},
      {title: 'خروج', path: '/logout', icon: 'mdi-exit-to-app'},
    ]
  }),
}
</script>

<template>
  <v-sheet class="mt-64 z-index-10" elevation="2">
    <v-container>
      <v-sheet class="d-flex align-center justify-space-between">
        <v-sheet>
          <img src="../assets/images/logo.svg" alt="Shavaz Logo" width="107" height="38" title="Shavaz Logo">
        </v-sheet>
        <v-sheet class="w-50 mx-2">
          <v-text-field
              placeholder="جستجو در شاواز"
              variant="solo-filled"
              density="compact"
              hide-details
              single-line>
            <template v-slot:prepend-inner>
              <v-icon>mdi-magnify</v-icon>
            </template>
          </v-text-field>
        </v-sheet>
        <v-sheet class="d-flex align-center justify-space-between">
          <v-btn
              v-if="!isLoggedIn"
              to="/login"
              density="comfortable"
              variant="outlined"
              class="mx-2"
          >
            <template v-slot:prepend>
              <v-icon>mdi-login</v-icon>
            </template>
            ورود | ثبت نام
          </v-btn>
          <v-btn
              v-if="isLoggedIn"
              density="comfortable"
              variant="outlined"
              class="mx-2"
          >
            <template v-slot:prepend>
              <v-icon>mdi-account-outline</v-icon>
            </template>
            {{ this.mobile }}

            <v-menu activator="parent">
              <v-list>
                <v-list-item
                    v-for="(item, index) in profileItems"
                    :key="index"
                    :value="index"
                    :to="item.path"
                    :prepend-icon="item.icon"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </v-btn>
          <template v-for="item in actionItems" :key="item.icon">
            <v-divider
                class="align-self-center"
                length="24"
                thickness="2"
                vertical
            />
            <v-btn
                :to="item.path"
                :icon="item.icon"
                variant="plain"/>
          </template>
        </v-sheet>
      </v-sheet>
      <v-sheet class="d-flex align-center justify-space-between mt-10">
        <v-sheet>
          <v-btn
              v-for="item in menuItems"
              :key="item.icon"
              :to="item.path"
              variant="plain">
            <template v-slot:prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
            {{ item.title }}
          </v-btn>
        </v-sheet>
        <v-btn
            style="color: #D72685"
            variant="text">
          <template v-slot:prepend>
            <v-icon>mdi-fire</v-icon>
          </template>
          فروش ویژه
        </v-btn>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.mt-64 {
  margin-top: 64px;
}

.z-index-10 {
  z-index: 10;
}
</style>

