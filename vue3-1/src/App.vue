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
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from "vue";
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

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行 ---- > onBeforeMount()");
    });
    onMounted(() => {
      console.log("3-组件挂载到页面之后执行 ---- > onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前执行 ---- > onBeforeUpdate()");
    });
    onUpdated(() => {
      console.log("5-组件更新之后执行 ---- > onUpdated()");
    });
    onBeforeUnmount(() => {
      console.log("6-组件卸载之前执行 ---- > onBeforeUnmount()");
    });
    onUnmounted(() => {
      console.log("7-组件卸载之后执行 ---- > onUnmounted()");
    });
    onActivated(() => {
      console.log("8-组件被激活时执行执 ---- > onActivated()");
    });
    // <keep-alive>中多出的钩子函数
    onDeactivated(() => {
      console.log(
        "9-比如从 A 组件，切换到 B 组件，A 组件消失时执行 ---- > onDeactivated()"
      );
    });
    // <keep-alive>中多出的钩子函数
    onErrorCaptured(() => {
      console.log(
        "10-当捕获一个来自子孙组件的异常时激活钩子函数 ---- > onErrorCaptured()"
      );
    });
    // onRenderTracked 状态跟踪 onRenderTriggered 状态触发
    onRenderTracked((event) => {
      console.log(event, "11-状态跟踪钩子函数 ---- > onRenderTracked()");
    });
    onRenderTriggered((event) => {
      console.log(event, "12-状态触发钩子函数 ---- > onRenderTriggered()");
    });
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
