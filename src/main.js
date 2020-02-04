import Vue from 'vue'
import App from './App.vue'
import VueSchemaMicrodata from './plugins/VueSchemaMicrodata'

Vue.config.productionTip = false

Vue.use(VueSchemaMicrodata)

new Vue({
  render: h => h(App),
}).$mount('#app')
