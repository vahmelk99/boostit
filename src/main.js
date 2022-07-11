import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
const VueScrollTo = require('vue-scrollto')
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
  faViber,
} from '@fortawesome/free-brands-svg-icons'
import Vuelidate from 'vuelidate'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
Vue.use(Vuelidate)
Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 800,
    md: 1180,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm', // customize this for SSR
})
Vue.use(VueScrollTo)
library.add(faFacebook)
library.add(faPhone)
library.add(faViber)
library.add(faWhatsapp)
library.add(faTwitter)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faTelegram)
library.add(faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
}).$mount('#app')
