<template>
  <h1>View</h1>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$myLoading.open();
    setTimeout(() => {
      this.$myLoading.hide();
    }, 3000);
  }
};
</script>
<style scoped>
</style>