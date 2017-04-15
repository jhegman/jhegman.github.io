import VueRouter from 'vue-router';
import Vue from 'vue';
import Work from './components/Work.vue';
import Home from './components/Home.vue';
import Gold from './components/Gold.vue';
const particles = require('particles.js');

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

Vue.component('modal', require('./components/Modal.vue'));
//set up router
Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { path: '/work', component: Work },
    { path: '/', component: Home },
    { path: '/gold', component: Gold },
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

