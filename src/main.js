import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Routes from './router'



Vue.config.productionTip = false

Vue.use(VueRouter);

var router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  store,
  render: h => h(App),
  router: router
}).$mount('#app')
