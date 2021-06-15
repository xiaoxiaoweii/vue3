<template>
  <div class="docker">
    <span
      class="docker__item"
      :class="{'docker__item--active': index === 0}"
      v-for="(item, index) in dockerList"
      :key="index"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__item__title">{{item.text}}</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      {
        icon: '&#xe655;',
        text: '购物车'
      },
      {
        icon: '&#xe655;',
        text: '购物车'
      },
      {
        icon: '&#xe655;',
        text: '购物车'
      },
      {
        icon: '&#xe655;',
        text: '购物车'
      },
      {
        icon: '&#xe655;',
        text: '购物车'
      }
    ]
    return {
      dockerList
    }
  }
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
