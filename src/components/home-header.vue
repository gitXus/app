<template>
    <div class="home-header">
      <div class="user"></div>
      <van-button class="btn" size="large" round @click="ent">立即登录</van-button>
    </div>
</template>

<script>
export default {
  name: 'home-header',
  methods: {
    ent() {
      this.$router.push('/auth/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.home-header{
  /*border:1px solid #000;*/
  /*width: 100vw;*/
  height: 306px;
  margin: 0 auto;
  background-image: url("../assets/shopping_mall_banner.png");
  background-size: cover;
  font-size: 0;
  line-height: 306px;
  .user{
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: url("../assets/yonghu.png");
    background-size: cover;
    margin-left: 80px;
    margin-right: 50px;
    vertical-align: middle;
  }
  .btn{
    display: inline-block;
    width: 280px;
    height: 72px;
    background: #3C9DFC;
    color: white;
    font-size: 32px;
    vertical-align: middle;
  }
}
</style>
