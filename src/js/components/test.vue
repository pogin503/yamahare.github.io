<template lang="pug">
  transition(appear)
    div
      p {{greeting}}
</template>

<script>
export default{
  data (){
    return{
      greeting: '( ´ー｀ )ﾌｩｰ．．．',
    }
  }
}
</script>

<style scoped>
  p {
    color: blue;
  }
  .v-enter-active, v-leave-active{
    transition: opacity 2s
  }
  .v-enter, v-leave-to{
    opacity: 0
  }
</style>
