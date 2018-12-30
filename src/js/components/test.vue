<template lang="pug">
  div
    p {{greeting}}
</template>

<script>
export default{
  data (){
    return{
      greeting: 'hello',
    }
  }
}
</script>

<style scoped>
  p {
    color: blue;
  }
</style>
