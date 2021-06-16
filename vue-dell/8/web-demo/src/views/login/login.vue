<template>
  <div class="wrapper">
    <img class="wrapper__img" src="@/assets/login.jpg" />
    <div class="wrapper__input">
      <input
        placeholder="请输入手机号"
        type="text"
        class="wrapper__input__content"
      />
    </div>
    <div class="wrapper__input">
      <input
        placeholder="请输入密码"
        class="wrapper__input__content"
        type="password"
      />
    </div>
    <div class="wrapper__login-button">登录</div>
    <div class="wrapper__login-link">立即注册</div>
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style lang="scss" scoped>
@import "@/style/varibles.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    margin: 0 0.4rem 0.16rem 0.4rem;
    height: 0.48rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    &__content {
      width: 100%;
      line-height: 0.48rem;
      outline: none;
      border: none;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    line-height: 0.48rem;
    font-size: 0.16rem;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
  }
  &__login-link {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
