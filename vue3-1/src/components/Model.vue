<template>
  <teleport to='#model'>
    <div id="center">
      <h2>xiaoxiaowei</h2>
    </div>
  </teleport>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid #000000;
  background: #ffffff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>