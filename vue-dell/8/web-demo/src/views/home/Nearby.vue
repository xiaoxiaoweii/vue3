<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="(item, index) in nearbyList" :key="index">
      <img class="nearby__item__img" :src="item.imgUrl" alt="" />
      <div class="nearby__item__content">
        <div class="nearby__item__content__title">{{ item.title }}</div>
        <div class="nearby__item__content__tags">
          <span
            class="nearby__item__content__tags__tag"
            v-for="(itemTags) in item.tags"
            :key="itemTags.id"
            >{{ itemTags }}</span
          >
        </div>
        <p class="nearby__item__content__highlight">
          {{item.desc}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        id: 1,
        title: '沃尔玛',
        tags: ['月售1万＋', '起送0', '基础运费5'],
        desc: 'VIP尊享89元减4元运费券(每月3张)',
        imgUrl: require('@/assets/icon.png')
      },
      {
        id: 2,
        title: '沃尔玛',
        tags: ['月售1万＋', '起送0', '基础运费5'],
        desc: 'VIP尊享89元减4元运费券(每月3张)',
        imgUrl: require('@/assets/icon.png')
      },
      {
        id: 3,
        title: '沃尔玛',
        tags: ['月售1万＋', '起送0', '基础运费5'],
        desc: 'VIP尊享89元减4元运费券(每月3张)',
        imgUrl: require('@/assets/icon.png')
      },
      {
        id: 4,
        title: '沃尔玛',
        tags: ['月售1万＋', '起送0', '基础运费5'],
        desc: 'VIP尊享89元减4元运费券(每月3张)',
        imgUrl: require('@/assets/icon.png')
      },
      {
        id: 5,
        title: '沃尔玛',
        tags: ['月售1万＋', '起送0', '基础运费5'],
        desc: 'VIP尊享89元减4元运费券(每月3张)',
        imgUrl: require('@/assets/icon.png')
      }
    ]
    return {
      nearbyList
    }
  }
}
</script>
<style lang="scss">
@import "@/style/varibles.scss";
@import "@/style/mixins.scss";
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
</style>
