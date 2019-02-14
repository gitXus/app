<template>
  <div class="loginreg">
    <div class="top-pic">
      <img class="pic-img" src="../assets/fanhui.png" alt="">
    </div>
    <img class="logo" src="../assets/logo.png" alt="#">
    <div class="titles">
      <router-link to="/auth/login">
        <span :class="{borderB: isColor}" @click="toLogin">登录</span>
      </router-link>
      <i>|</i>
      <router-link to="/auth/register">
        <span  @click="toRegister" :class="{borderB: !isColor}">注册</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'loginReg',
  data() {
    return {
      isColor: false,
    };
  },
  methods: {
    toLogin() {
      this.isColor = true;
    },
    toRegister() {
      this.isColor = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loginreg {
  width: 100%;
  height: 100vh;
  .top-pic {
    height: 95px;
    position: relative;
    .pic-img {
      width: 40px;
      height: 40px;
      position: absolute;
      left: 40px;
      top: 20px;
    }
  }
  .logo {
    width: 80px;
    display: block;
    margin: 24px auto;
  }
  .titles {
    width: 100%;
    text-align: center;
    a {
      margin: 40px 80px;
      display: inline-block;
      text-align: center;
      font-size: 32px;
      padding-bottom: 5px;
      box-sizing: border-box;
      text-decoration: none;
      color: black;
    }
    i {
      display: inline-block;
      user-select: none;
      font-style: normal;
      font-size: 20px;
      color: #dddddd;
      text-align: center;
    }
  }
  .borderB {
    border-bottom: 4px solid #2e7fe5;
    color: #2e7fe5;
  }
}
</style>
