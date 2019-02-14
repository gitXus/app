<template>
  <div class="home-footer">
    <!--<div class="nav">-->
      <!--<span class="nav-icon">-->
        <!--<i class="iconfont icon-jiekuan"></i>-->
        <!--<span class="icon-text">借款</span>-->
      <!--</span>-->
      <!--<span class="nav-icon">-->
        <!--<i class="iconfont icon-huankuan"></i>-->
        <!--<span class="icon-text">还款</span>-->
      <!--</span>-->
      <!--<span class="nav-icon">-->
        <!--<i class="iconfont icon-shangcheng"></i>-->
        <!--<span class="icon-text">商城</span>-->
      <!--</span>-->
      <!--<span @click="col" class="nav-icon" :class="{ fontColor:!isShow }">-->
        <!--<i class="iconfont icon-wode"></i>-->
        <!--<span class="icon-text">我的</span>-->
      <!--</span>-->
    <!--</div>-->
    <van-tabbar class="nav" v-model="active">
      <van-tabbar-item class="iconfont icon-jiekuan nav-size"><span>借款</span></van-tabbar-item>
      <van-tabbar-item to="/repayment" class="iconfont icon-huankuan nav-size">
        <span>还款</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mall" class="iconfont icon-shangcheng nav-size">
        <span>商城</span>
      </van-tabbar-item>
      <van-tabbar-item to="./auth/home" class="iconfont icon-wode nav-size">
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'home-footer',
  data() {
    return {
      active: 3,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.home-footer{
  /*border:1px solid #000;*/
  /*width: 100vw;*/
  height: 100px;
  /*background: white;*/
  margin: 0 auto;
  .nav{
    /*width: 100vw;*/
    height: 120px;
    text-align: center;
    background: white;
    line-height: 110px;
    padding-top: 20px;
    box-sizing: border-box;
    .nav-size{
      font-size: 50px !important;
    }
    span{
      display: block;
      font-size: 15px;
    }
    /*.nav-icon{*/
      /*display: inline-block;*/
      /*width: 24%;*/
      /*text-align: center;*/
      /*.icon-text{*/
        /*display: block;*/
        /*font-size: 22px;*/
        /*color: #acacac;*/
      /*}*/
      /*.iconfont{*/
        /*display: inline-block;*/
        /*font-size: 30px;*/
        /*margin-top: 17px;*/
      /*}*/
    /*}*/
  }
}
</style>
