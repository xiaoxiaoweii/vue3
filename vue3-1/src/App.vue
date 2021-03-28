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
// reactive
import { reactive,toRefs,ToRefs } from "vue";
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: "App",
  setup() {
    const data: DataProps = reactive({
      girls: ["服务员1", "服务员2", "服务员3"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    const refData = toRefs(data)
    return {
      ...refData,
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
