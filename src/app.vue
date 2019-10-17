<script>
import { Button } from "ant-design-vue";
export default {
  components: {
    Button
  },
  data() {
    return {};
  },
  render(h) {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello World</h1>
        <Button
          type="primary"
          onClick={() => {
            this.$router.push("/view");
          }}
        >
          测试
        </Button>
        <Button>
          <router-link to="/view">views</router-link>
        </Button>
        <Button>
          <router-link to="/news">news</router-link>
        </Button>
          <router-view></router-view>
      </div>
    
    );
  }
};
</script>
<style scoped>
.testh {
  color: red;
}
</style>