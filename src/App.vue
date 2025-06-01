<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import headerVue from './components/header.vue';

</script>

<template>
  <headerVue class="header" />

  <RouterView />
</template>


<style scoped>
  .header {
    z-index: 1;
  }
</style>