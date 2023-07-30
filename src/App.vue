<script setup lang="ts">
import { RouterView } from 'vue-router';
import Head from './components/Head.vue';

</script>

<template>
  <Head></Head>
  <div class="low">
    <RouterView />
  </div>
</template>

<style scoped>
html,
body {
  margin: 0px;
  max-width: 100%;
  max-height: 100%;
}

.low {
  margin-top: 10px;
}
</style>
