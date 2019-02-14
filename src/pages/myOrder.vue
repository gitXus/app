<template>
  <div class="maOrder">
    <page-header class="appHeader"></page-header>
    <div class="nav">
      <van-tabs v-model="active">
        <van-tab title="全部"></van-tab>
        <van-tab title="代付款"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
        <van-tab title="已取消"></van-tab>
      </van-tabs>
    </div>
    <div class="main">
      <img src="../assets/no_data_icon.png" alt="">
    </div>
  </div>
</template>

<script>
import pageHeader from '../public/appHeader/page-header';

export default {
  name: 'myOrder',
  data() {
    return {
      active: 2,
    };
  },
  components: { pageHeader },
};
</script>

<style lang="scss" scoped>
.myOrder{
  .appHeader{
    margin-bottom: 0;
    border-bottom: 1px solid #f2f2f2;
  }
  .nav{
    van-tab{
      background: white;
      margin-bottom: 10px;
      height: 84px;
    }
    /deep/ .van-ellipsis{
      margin-top: 10px;
      font-size: 30px;
    }
    /deep/ .van-tabs .van-tab__pane{
      margin-top: 40px;
    }
    /deep/ .van-tab--active{
      color: #5095f5;
    }
    /deep/ .van-tabs__line{
      background-color: #5095f5;
    }
    /deep/ .van-tab{
      width: 50px;
      line-height: 50px;
    }
  }
  .main{
    height: 100%;
    img{
    }
  }
}
</style>
