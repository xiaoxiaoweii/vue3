<template>
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
    <div class="icons__item" v-for="(item, index) in iconList" :key="index">
      <img class="icons__item__img" :src="item.imgUrl" />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      },
      {
        imgUrl: require('@/assets/icon.png'),
        desc: '超市便利'
      }
    ]
    return {
      iconList
    }
  }
}
</script>
<style lang="scss" scope>
@import "@/style/varibles.scss";
@import "@/style/mixins.scss";
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
</style>
