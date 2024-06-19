import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import {fa} from 'vuetify/locale'

export default createVuetify({
    components,
    directives,
    defaults: {
        global: {
            dir: 'rtl',
            ripple: false,
        },
        VToolbar: {
            elevation: 2,
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    locale: {
        locale: 'fa',
        fallback: 'fa',
        messages: {fa},
    },
    theme: {
        defaultTheme: 'light',
    },
})

