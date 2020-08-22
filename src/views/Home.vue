<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Sun Hongyue's receive-app" />
    <van-button @click="goOther" type="info">去其他页面</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'vant'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    [Button.name]: Button
  },
  methods: {
    goOther() {
      this.$router.push({ path: '/about' })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
