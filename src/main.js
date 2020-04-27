import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import RouteTransition from 'vue-route-transition'
import '@/assets/styl/reset.styl'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(require('@/components/wjHead').default)
Vue.use(require('@/components/wjFoot').default)
Vue.use(RouteTransition)

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
