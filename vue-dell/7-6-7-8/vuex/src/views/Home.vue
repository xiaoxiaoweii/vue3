<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{myName}}</h1>
    <button @click="handleClick">改变</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    myName() {
      return this.$store.state.name
    }
  },
  methods: {
    handleClick() {
      // 想改变数据 vuex要求第一步 必须派发一个action
      this.$store.dispatch('change','wei')
    }
  }
}
</script>
