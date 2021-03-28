<template>
  <!-- eslint-disable -->
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>欢迎光临晓晓伟餐厅</h2>
    <div>请选择服务员</div>
    <div>
      <button
        v-for="(item, index) in girls"
        :key="index"
        @click="selectGirlFun(index)"
      >
        {{ index }}: {{ item }}
      </button>
      <div>你选择的服务员是: {{ selectGirl }}</div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const girls = ref(["服务员1", "服务员2", "服务员3"]);
    const selectGirl = ref("");
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index];
    };
    return {
      girls,
      selectGirl,
      selectGirlFun
    };
  },
});
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
