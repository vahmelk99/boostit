import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
const VueScrollTo = require('vue-scrollto')

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


Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
