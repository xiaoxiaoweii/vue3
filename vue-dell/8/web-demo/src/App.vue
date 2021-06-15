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
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="@/assets/icon.png" alt="" />
        <p class="icons__item__desc">超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img class="nearby__item__img" src="@/assets/icon.png" alt="" />
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__tag">月售1万＋</span>
          </div>
          <p class="nearby__item__content__highlight">
            VIP尊享89元减4元运费券(每月3张)
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="@/assets/icon.png" alt="" />
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__tag">月售1万＋</span>
          </div>
          <p class="nearby__item__content__highlight">
            VIP尊享89元减4元运费券(每月3张)
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="@/assets/icon.png" alt="" />
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__tag">月售1万＋</span>
          </div>
          <p class="nearby__item__content__highlight">
            VIP尊享89元减4元运费券(每月3张)
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="@/assets/icon.png" alt="" />
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__tag">月售1万＋</span>
          </div>
          <p class="nearby__item__content__highlight">
            VIP尊享89元减4元运费券(每月3张)
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="@/assets/icon.png" alt="" />
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__tag">月售1万＋</span>
          </div>
          <p class="nearby__item__content__highlight">
            VIP尊享89元减4元运费券(每月3张)
          </p>
        </div>
      </div>
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
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.2rem 0.18rem;
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
  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;
    &__item {
      width: 20%;
      &__img {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
      }
      &__desc {
        margin: 0.06rem 0 0.16rem 0;
        text-align: center;
        color: $content-font-color;
      }
    }
  }
  .gap {
    height: 0.1rem;
    background: $content-bgColor;
    margin: 0 -0.18rem;
  }
  .nearby {
    &__title {
      margin: 0.16rem 0 0.02rem 0;
      font-size: 0.18rem;
      font-weight: normal;
      color: $content-font-color;
    }
    &__item {
      display: flex;
      padding: 0.12rem;
      &__img {
        margin-right: 0.16rem;
        width: 0.56rem;
        height: 0.56rem;
      }
      &__content {
        flex: 1;
        padding-bottom: 0.12rem;
        border-bottom: 1px solid $content-bgColor;
        &__title {
          line-height: 0.22rem;
          font-size: 0.16rem;
        }
        &__tags {
          margin-top: 0.08rem;
          line-height: 0.18rem;
          font-size: 0.13rem;
          color: $content-font-color;
          &__tag {
            margin-right: 0.16rem;
          }
        }
        &__highlight {
          margin: 0.08rem 0 0 0;
          line-height: 0.18rem;
          font-size: 0.13rem;
          color: #e93b3b;
        }
      }
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
