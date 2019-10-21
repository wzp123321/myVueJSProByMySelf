<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Sider :collapsed="collapsed"></Sider>
    <a-layout>
      <Header :collapsed="collapsed" @collapsedChange="()=>collapsed = !collapsed"></Header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout, Menu } from "ant-design-vue";
import { Sider, Header } from "../layout/index";
export default {
  components: {
    "a-layout": Layout,
    Sider,
    Header,
    "a-layout-content": Layout.Content
  },
  data() {
    return {
      collapsed: false
    };
  },
  created(){
  }
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
}
</style>