<template>
  <div class="signin-panel">
    <div class="login-content">
      <div class="login-header">系统登录</div>
      <Form :form="form" @submit="handleSubmit">
        <FormItem label="用户名" :label-col="{span:4}" :wrapper-col="{span:20}" :required="false">
          <Input
            style="height:40px"
            v-decorator="[
              'username',
              {
              rules: [{ required: true, message: '请输入用户名'},{whitespace:true ,message:'请输入用户名'}]
              }
            ]
            "
            placeholder="请输入用户名"
          />
        </FormItem>
        <FormItem label="密码" :label-col="{span:4}" :wrapper-col="{span:20}" :required="false">
          <Input
            type="password"
            style="height:40px"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' },{whitespace:true ,message:'请输入密码'}]
              }
            ]"
            placeholder="请输入密码"
          />
        </FormItem>
        <FormItem class="loginbtn" :label-col="{span:4}" :wrapper-col="{span:20}">
          <a-button type="primary" :loading="loading" html-type="submit">登录</a-button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Button, Input, message } from "ant-design-vue";
import store from "../store/index";
import { mapActions } from "vuex";
export default {
  name: "Signin",
  store,
  components: {
    Form,
    "a-button": Button,
    Input,
    FormItem: Form.Item
  },
  data() {
    return {
      loading: false,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    ...mapActions(["setUserToken"]),
    handleSubmit(e) {
      this.loading = true;
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          setTimeout(() => {
            this.setUserToken("265b3062-ab07-4913-ab89-f154d007d484");
            this.loading = false;
            this.$router.push("/");
          }, 1000);
        }
      });
    }
  },
  mounted() {
    this.form.setFields({
      username: { value: "admin" },
      password: { value: "123456" }
    });
  }
};
</script>
<style lang="less" scoped>
.signin-panel {
  position: relative;
  height: 100%;
  background-color: #f0f2f5;
  .login-content {
    position: fixed;
    width: 430px;
    height: 310px;
    right: 50%;
    top: 50%;
    transform: translate3d(50%, -50%, 0);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: "0, 0, 5px #eee";
    padding: 45px;
    .login-header {
      text-align: center;
      font-size: 24px;
      margin-bottom: 18px;
    }
    .loginbtn {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      button {
        width: 100%;
      }
    }
  }
}
</style>
