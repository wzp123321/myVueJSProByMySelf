<template>
  <a-layout-header class="layout-header">
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="changeIcon" />
    <div class="user-wrap">
      <img
        class="user-avatar"
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
      />
      <a-dropdown :trigger="['click']">
        <i class="iconfont icon-down"></i>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <a href="http://www.alipay.com/">首页</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a href="http://www.taobao.com/">个人中心</a>
          </a-menu-item>
          <a-menu-item key="2">
            <a href="https://github.com/wzp123321/myVueJSProByMySelf.git">项目地址</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3" @click="signout">退出登录</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>
<script>
import { Layout, Icon, Dropdown, Menu } from "ant-design-vue";
import store from "../store/index.js";
import { mapActions } from "vuex";
export default {
  name: "Header",
  store,
  components: {
    "a-layout-header": Layout.Header,
    "a-icon": Icon,
    "a-dropdown": Dropdown,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-menu-divider": Menu.Divider
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setUserToken"]),
    changeIcon() {
      this.$emit("collapsedChange");
    },
    signout() {
      this.setUserToken("");
      this.$router.push("/signin");
    }
  }
};
</script>
<style lang="less" scoped>
.layout-header {
  background: #fff;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .user-wrap {
    padding-right: 40px;
    position: relative;
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
    .icon-down {
      font-size: 32px;
      position: absolute;
      top: 15px;
      right: 10px;
    }
  }
}
#components-layout-demo-custom-trigger {
  .trigger {
    display: inline-block;
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>