import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false
Vue.use(Vuetify);

const Office = window.Office;
Office.initialize = () => {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
}
