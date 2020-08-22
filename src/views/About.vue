<template>
  <div class="about">
    <van-nav-bar @click-left="$router.back()" left-arrow title="孙小仙女的页面" />
    <div class>
      <van-search
        @clear="onConfirm"
        @search="onConfirm"
        class="search-bar"
        placeholder="请输入任务名称关键字"
        v-model="queryInfo.name"
      />
    </div>
    <div class="btns">
      <van-button :key="idx" :type="item.type" v-for="(item,idx) in btnsConf">{{item.text}}</van-button>
    </div>
  </div>
</template>
<script>
import { generatorComponents } from "@/utils";
import {
  NavBar,
  Search,
  Icon,
  Button,
  Popup,
  Toast
} from "vant";
const components = [
  NavBar,
  Search,
  Icon,
  Button,
  Popup,
];
export default {
  components: {
    ...generatorComponents(components)
  },
  data() {
    return {
      queryInfo: {
        name: ''
      },
      btnsConf: [
        {
          type: 'primary',
          text: '主要按钮'
        },
        {
          type: 'default',
          text: '默认按钮'
        },
        {
          type: 'info',
          text: '信息按钮'
        },
        {
          type: 'warning',
          text: '警告按钮'
        },
        {
          type: 'danger',
          text: '危险按钮'
        },
      ]
    }
  },
  methods: {
    onConfirm() {
    }
  }
}
</script>
<style lang="scss" scoped>
.btns {
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

