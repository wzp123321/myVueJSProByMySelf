<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed">
    <div class="logo" />
    <a-menu theme="dark" mode="inline" v-for="(siderItem,index) in datas" :key="index+siderItem">
      <a-menu-item v-if="siderItem.children.length===0">
        <i :class="`iconfont ${siderItem.icon}`"></i>
        <span @click="$router.push(siderItem.path)">{{siderItem.title}}</span>
      </a-menu-item>
      <a-sub-menu v-else>
        <span slot="title">
          <i :class="`iconfont ${siderItem.icon}`"></i>
          <span>{{siderItem.title}}</span>
        </span>
        <a-menu-item v-for="(siderChildItem,idx) in siderItem.children" :key="siderChildItem+idx">
          <i :class="`iconfont ${siderChildItem.icon}`"></i>
          <span @click="$router.push(siderChildItem.path)">{{siderChildItem.title}}</span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import siders from "../assets/js/sider.js";
export default {
  name: "Sider",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      datas: []
    };
  },
  created() {
    this.datas = siders;
  }
};
</script>
<style lang="less" scoped>
</style>