<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ myName }}</h1>
    <h1>{{ age }}</h1>
    <button @click="handleClick">改变名字</button>
    <button @click="handleClickAge">改变年龄</button>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const { age } = toRefs(store.state);
    const handleClickAge = () => {
      store.commit('changeAge',16)
    }
    return {
      age,
      handleClickAge
    };
  },
  computed: {
    myName() {
      return this.$store.state.name;
    },
  },
  methods: {
    handleClick() {
      // 想改变数据 vuex要求第一步 必须派发一个action
      this.$store.dispatch("change", "wei");
    },
  },
};
</script>
