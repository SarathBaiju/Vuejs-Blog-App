import 'core-js/stable';
import 'regenerator-runtime/runtime'; 
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ShowBlogs from './components/ShowBlogs.vue'
import AddBlogs from './components/AddBlogs.vue'
import { createProvider } from './vue-apollo'

Vue.use(VueRouter)

const routes = new VueRouter({
  mode:'history',
  routes:[
    {path: '/', component: ShowBlogs},
    {path: '/add', component: AddBlogs}
  ]
})

new Vue({
  el: '#app',
  router:routes,
  apolloProvider: createProvider(),
  render: h => h(App)
})
