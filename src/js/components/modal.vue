<template lang="pug">
  transition
    .modal.is-active
      .modal-background(@click="$emit('close')")
      .modal-content
        .box
          p {{ greeting }}
      button.modal-close.is-large(aria-label="close"
                                  @click="$emit('close')")
</template>

<script>
export default{
  data (){
    return{
      greeting: 'こんにちは',
    }
  },
}
</script>

<style scoped>
  p {
    color: blue;
  }
  .v-enter-active, v-leave-active{
    transition: opacity .3s
  }
  .v-enter, v-leave-to{
    opacity: 0
  }
</style>
