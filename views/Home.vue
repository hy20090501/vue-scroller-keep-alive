<template>
  <div>
    <h1>home</h1>
    <h1 @click="goPageA">go to pageA</h1>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {

      };
    },
    mounted() {
      console.log('mounted....')
    },
    methods: {
      goPageA() {
        this.$router.push({ path: "/pageA" });
      }
    },
  }
</script>
<style>

</style>
