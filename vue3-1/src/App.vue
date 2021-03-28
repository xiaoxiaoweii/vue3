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
    <div>
      <button @click="overAction">点餐完毕</button>
    </div>
    <div>
      {{ overText }}
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// reactive
import { reactive, toRefs, ref, watch } from "vue";
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: "App",
  setup() {
    console.log("1-开始创建之前 ----> setup()");
    const data: DataProps = reactive({
      girls: ["服务员1", "服务员2", "服务员3"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    const refData = toRefs(data);
    const overText = ref("晓晓伟餐厅");
    const overAction = () => {
      overText.value = "点餐完成 |" + overText.value;
    };
    watch([overText,() => data.selectGirl], (newValue,oldValue) => {
      document.title = newValue[0]
    });
    return {
      ...refData,
      overText,
      overAction,
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
