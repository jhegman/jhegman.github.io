import Vue from 'vue';
const particles = require('particles.js');

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

Vue.component('modal', require('./components/Modal.vue'));
const app = new Vue({
	el: '#app',
	data: {
	   showModal: false,
	}

});

