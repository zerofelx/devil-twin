import Vue from 'vue'
import Router from 'vue-router'
import ConfigView from './views/ConfigView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: ConfigView
        }
    ]
});