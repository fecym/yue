<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p>组件测试页</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0;
}
p {
  font-size: 30px;
}
</style>
