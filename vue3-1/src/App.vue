<template>
  <!-- eslint-disable -->
  <div>
    <div v-if="loading">loading。。。。</div>
    <img v-if="loaded" :src="result.imgUrl" alt="">
    <model></model>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import useUrlAxios from "./hooks/useURLAxios";
import model from './components/Model.vue'
export default {
  name: "App",
  components: {
    model
  },
  setup() {
    const { result, loading, loaded, error } = useUrlAxios(
      "https://apiblog.jspang.com/default/getGirl"
    );
    return {
      result,
      loading,
      loaded,
      error,
    };
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
