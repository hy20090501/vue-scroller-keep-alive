<template>
  <div>
    <h1>pageB</h1>
    <h1 @click="back">back to pageA</h1>
    <h1 @click="goPageC">go pageC</h1>
  </div>
</template>
<script>
  export default {
    name: 'PageB',
    data() {
      return {
        msg: "我是PageB页面",
      };
    },
    mounted() {
      console.log('mounted....')
    },
    methods: {
      back() {
        // this.$router.push({ path: "/pageA" });
        this.$router.go(-1);
      },
      goPageC(){
        this.$router.push({ path: "/pageC" });
      }
    },
  }
</script>
<style>

</style>
