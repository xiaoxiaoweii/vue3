<template>
  <!-- eslint-disable -->
  <div>
    <Suspense>
      <template #default>
        <async-show />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import asyncShow from './components/asyncShow.vue'
export default {
  name: "App",
  components: {
    asyncShow
  },
  setup() {

    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
