<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe61f;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe60a;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe706;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="@/assets/banner.jpg" />
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
@import "./style/varibles.scss";
@import "./style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  .position {
    position: relative;
    padding: 0.16rem 0.24rem 0.16rem 0;
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
      font-size: 0.2rem;
    }
  }
  .search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    font-size: 0.14rem;
    .iconfont {
      font-size: 0.2rem;
      display: inline-block;
      position: relative;
      top: 0.04rem;
      padding: 0 0.12rem 0 0.16rem;
    }
    &__text {
      display: inline-block;
      font-size: 0.14rem;
    }
  }
  .banner {
    height: 0;
    overflow: hidden;
    /* 图片没加载之前 先撑开位置 */
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
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
