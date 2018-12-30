import Vue from 'vue'
import Test from './components/test.vue'
import Modal from './components/modal.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      message: "↓出るぞ↓",
      showModal: false
    },
    components: {
      Test,
      Modal,
    },
  })
})
