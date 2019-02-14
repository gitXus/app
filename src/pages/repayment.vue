<template>
  <div class="repayment">
    <div class="app-header">
      还款
    </div>
    <div class="pic">
      <img class="pic-no" src="../assets/no-address-icon.png" alt="无订单数据">
      <p>暂无订单数据，
        <router-link to="./auth/login">请立即登录</router-link>
      </p>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../components/home-footer';

export default {
  name: 'repayment',
  components: { homeFooter },
};
</script>

<style lang="scss" scoped>
.repayment{
  background: white;
  .app-header{
    height: 80px;
    border-bottom: 1px solid #eeeeee;
    text-align: center;
    font-size: 25px;
    line-height: 80px;
  }
  .pic{
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    .pic-no{
      display: block;
      margin: 0 auto;
    }
    a{
      color: #45b8d4;
    }
  }
}
</style>
