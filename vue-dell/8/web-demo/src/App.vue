<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe61f;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe60a;</span>
    </div>
  </div>
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
<style lang='scss'>
@import './style/varibles.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  .position {
    position: relative;
    padding: 0.16rem .24rem .16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-font-color;
    @include ellipsis;
    &__icon {
      margin-right: 0.08rem;
      font-size: 0.2rem;
    }
    .position_notice {
      position: absolute;
      right: 0;
      top: 0.17rem;
      font-size: .2rem;
    }
  }
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
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
