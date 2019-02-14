<template>
  <div class="home-center">
    <div class="wait">
      <span class="wait-icon">
        <i class="iconfont icon-daifukuan"></i>
        <span class="icon-text">代付款</span>
      </span>
      <span class="wait-icon">
        <i class="iconfont icon-daishouhuo"></i>
        <span class="icon-text">代收货</span>
      </span>
      <span class="wait-icon">
        <i class="iconfont icon-shouhoufuwu"></i>
        <span class="icon-text">售后/退换货</span>
      </span>
      <span class="wait-icon">
        <i class="iconfont icon-dingdan"></i>
        <span class="icon-text">所有订单</span>
      </span>
    </div>
    <div class="option">
      <div class="option-icon">
        <i class="iconfont icon-qianbao"></i>
        <span class="option-icon-text">商城分期订单</span>
        <img src="../assets/next.png" alt="">
      </div>
      <div class="option-icon">
        <i class="iconfont icon-yinxingqia"></i>
        <span class="option-icon-text">我的银行卡</span>
        <img src="../assets/next.png" alt="">
      </div>
      <div class="option-icon">
        <i class="iconfont icon-shouhuodizhi"></i>
        <span class="option-icon-text" @click="address">收货地址</span>
        <img src="../assets/next.png" alt="">
      </div>
      <div class="option-icon">
        <i class="iconfont icon-youhuiquan"></i>
        <span class="option-icon-text">优惠券</span>
        <img src="../assets/next.png" alt="">
      </div>
    </div>
    <div class="set">
      <div class="set-icon">
        <i class="iconfont icon-duanxin"></i>
        <span class="set-icon-text">我要反馈</span>
        <img src="../assets/next.png" alt="">
      </div>
      <div class="set-icon">
        <i class="iconfont icon-shezhi"></i>
        <span class="set-icon-text">设置</span>
        <img src="../assets/next.png" alt="">
      </div>
      <div class="set-icon">
        <i class="iconfont icon-bangzhuzhongxin"></i>
        <span class="set-icon-text">帮助中心</span>
        <img src="../assets/next.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-center',
  methods: {
    address() {
      this.$router.push('/receive-address');
    },
  },
};
</script>

<style lang="scss" scoped>
.home-center{
  /*border:1px solid #000;*/
  /*width: 100vw;*/
  height: 880px;
  background: #f6f6f6;
  margin: 15px auto;
  .wait{
    /*width: 100vw;*/
    height: 150px;
    text-align: center;
    background: white;
    margin-bottom: 12px;
    .wait-icon{
      display: inline-block;
      width: 24%;
      text-align: center;
      .icon-text{
        display: block;
        font-size: 26px;
      }
      .iconfont{
        display: inline-block;
        font-size: 47px;
        margin-bottom: 29px;
        margin-top: 21px;
      }
    }
  }
  .option,.set{
    /*width: 100vw;*/
    height: 355px;
    background: white;
    .option-icon,.set-icon{
      width: 100vw;
      height: 88px;
      position: relative;
      .iconfont{
        display: inline-block;
        font-size: 32px;
        margin-right: 47px;
        margin-left: 34px;
        margin-top: 34px;
      }
      .icon-qianbao,.icon-duanxin{
        color: #f34f63;
      }
      .icon-yinxingqia,.icon-shezhi{
        color:#2979e5;
      }
      .icon-shouhuodizhi,.icon-bangzhuzhongxin{
        color: #feb144;
      }
      .icon-youhuiquan{
        color: #ef7fad;
      }
      .option-icon-text,.set-icon-text{
        display: inline-block;
        font-size: 30px;
      }
    }
  }
  .set{
    margin: 15px auto;
    height: 265px;
  }
  img{
    position: absolute;
    right: 10px;
    top: 28px;
  }
}
</style>
