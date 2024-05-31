import {createApp} from 'vue'
import App from './App.vue'
import {router, vuetify} from './plugins'

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
