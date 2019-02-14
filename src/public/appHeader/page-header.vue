<template>
  <div class="app-header">
    <span class="text app-header_left">123</span>
    <span class="text app-header_center">
        <span>确认订单</span>
      </span>
    <span class="text app-header_right">321</span>
  </div>
</template>

<script>
export default {
  name: 'page-header',
};
</script>

<style lang="scss" scoped>
  .app-header{
    background: white;
    height: 80px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e3e3e3;
    .text{
      font-size: 35px;
      display: inline-block;
      height: 80px;
      width: 30%;
      line-height: 80px;
    }
    .app-header_left{
      margin-left: 20px;
    }
    .app-header_center{
      text-align: center;
      span{
        display: inline-block;
        text-align: center;
      }
    }
    .app-header_right{
      text-align: right;
      margin-right: 20px;
    }
  }
</style>
