<script>

export default {
  data: () => ({
    form: false,
    step: "otp",
    mobile: null,
    otp: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return
      this.loading = true
      if (this.step === 'otp') {
        fetch('http://localhost:8000/api/otp', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({mobile: this.mobile})
        })
            .then(response => response.json())
            .then(res => {
              this.loading = false
              if (res.status === "ok") {
                this.step = 'verify'
              }
            })
            .catch(err => {
              console.log(err.message)
              this.loading = false
            })
      } else if (this.step === 'verify') {
        fetch('http://localhost:8000/api/verify', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({otp: this.otp})
        })
            .then(response => response.json())
            .then(res => {
              this.loading = false
              if (res.status === "ok") {
                localStorage.setItem("auth-token", res.token)
                localStorage.setItem("user-mobile", this.mobile)
                this.$router.push({path: '/', replace: true})
              }
            })
            .catch(err => {
              console.log(err.message)
              this.loading = false
            })
      }

    },
    required(v) {
      return !!v || 'این فیلد الزامی است'
    },
  },
}
</script>

<template>
  <v-sheet class="w-100 h-100 d-flex justify-space-between align-center" color="#ddd" rounded>
    <v-card class="mx-auto px-6 py-8" width="417" height="470">
      <v-form
          v-model="form"
          @submit.prevent="onSubmit"
      >
        <v-btn
            block
            class="mb-16"
            type="submit"
            variant="plain">
          <img src="../assets/images/logo.svg" width="120" alt="Logo">
        </v-btn>
        <v-sheet v-if="step==='otp'">
          <v-sheet>شماره تلفن خودرا وارد کنید.</v-sheet>
          <v-text-field
              v-model="mobile"
              :readonly="loading"
              :rules="[required]"
              placeholder="09*********"
              class="mb-2"
              label="تلفن"
              clearable
          ></v-text-field>


          <br>

          <v-btn
              class="mt-16"
              :disabled="!form"
              :loading="loading"
              color="#D72685"
              size="large"
              type="submit"
              variant="elevated"
              block
          >
            دریافت کد
          </v-btn>

        </v-sheet>
        <v-sheet v-if="step==='verify'">
          <v-sheet>کد تایید را وارد کنید.</v-sheet>
          <v-text-field
              v-model="otp"
              :readonly="loading"
              placeholder="*****"
              clearable
          ></v-text-field>
          <v-sheet style="font-size: 11px" class="mb-4">
            کد به شماره
            <router-link to="/" style="text-decoration: none">{{ this.mobile }}</router-link>
            ارسال شد.
          </v-sheet>
          <router-link to="/" style="text-decoration: none">تغییر شماره</router-link>
          <br>
          <router-link to="/" style="text-decoration: none">ورود با رمز عبور</router-link>
          <br>
          <v-btn
              class="mt-10"
              :disabled="!form"
              :loading="loading"
              :rules="[required]"
              color="#D72685"
              size="large"
              type="submit"
              variant="elevated"
              block
          >
            ورود
          </v-btn>
        </v-sheet>
        <v-sheet style="font-size: 11px" class="mt-5">
          ورود به معنای پذیرش
          <router-link to="/" style="text-decoration: none"> شرایط و قوانین حریم</router-link>
          خصوصی شاواز می‌باشد.
        </v-sheet>
      </v-form>
    </v-card>
  </v-sheet>
</template>
