import Vue from 'vue'
import Router from 'vue-router'

//this is where we import the components
import DashboardPageComponent from '../../components/admin/DashboardPageComponent.vue'
import UserPageComponent from '../../components/admin/UserPageComponent.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkExactActiveClass: "active",
    routes: [
        { path: "/admin/dashboard", component: DashboardPageComponent, name: "dashboard" },
        { path: "/admin/users", component: UserPageComponent, name: "users" }

      ]
  })

  export default router
