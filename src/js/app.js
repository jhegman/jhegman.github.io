import VueRouter from 'vue-router';
import Vue from 'vue';
import Work from './components/Work.vue';
import Home from './components/Home.vue';
import Gold from './components/Gold.vue';
const particles = require('particles.js');

Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
Vue.config.productionTip = false;

particlesJS.load('particles-js', 'particles.json', function() {
});

Vue.component('modal', require('./components/Modal.vue'));
//set up router
Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { path: '/work', name: 'work-route', component: Work },
    { path: '/', name: 'home-route', component: Home },
    { path: '/gold', name: 'gold-route', component: Gold },
    { path: '*', redirect: '/' },
]
});

const app = new Vue({
	el: '#app',
            router: router,
            data: {
                showModal: false,
	},

});

