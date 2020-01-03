import "@babel/polyfill";
require('./bootstrap')

import 'vuetify/dist/vuetify.min.css'

//Packages
import Vue from 'vue'
import vuetify from 'vuetify'
import Vuex from 'vuex'
import router from './router/app/index.js'
import store from './store'

//Components
import App from './App.vue'

Vue.use(Vuex)
Vue.use(vuetify)

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    vuetify: new vuetify(),
    store,
    render: h => h(App)
})








