import Vue from 'vue'
import Test from './components/test.vue'
import Modal from './components/modal.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      message: "Can you say hello?",
      showModal: false
    },
    components: {
      Test,
      Modal,
    },
    methods: {
      alertTest(){
        alert('こんにちは')
      }
    }
  })
})
