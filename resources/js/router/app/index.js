import Vue from 'vue'
import Router from 'vue-router'

//this is where we import the components
import HomePageComponent from '../../components/HomePageComponent.vue'
import AboutPageComponent from '../../components/AboutPageComponent.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkExactActiveClass: "active",
    routes: [
        { path: "/", component: HomePageComponent, name: "home" },
        { path: "/about", component: AboutPageComponent, name: "about" },

      ]
  })

  export default router
