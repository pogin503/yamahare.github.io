<template>
  <div>
    <p>{{greeting}}</p>
  </div>
</template>

<script>
export default{
  data (){
    return{
      greeting: 'hello'
    }
  }
}
</script>

<style scoped>
  p {
    color: blue;
  }
</style>
