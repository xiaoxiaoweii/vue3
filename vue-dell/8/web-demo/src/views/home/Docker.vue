<template>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe655;</div>
      <div class="docker__item__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__item__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe627;</div>
      <div class="docker__item__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe608;</div>
      <div class="docker__item__title">我的</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker'
}
</script>
<style lang="scss">
@import "@/style/varibles.scss";
@import "@/style/mixins.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-font-color;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4fc;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &__title {
      font-size: 0.1rem;
      transform: scale(0.5 0.5);
      transform-origin: center top;
    }
  }
}
</style>
