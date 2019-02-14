<template>
    <div class="app-header">
      <span class="app-header-left">
        <img @click="backpag" src="../../assets/fanhui.png" alt="">
      </span>
      <span class="app-header-title"><slot></slot></span>
      <span class="app-header-right"></span>
    </div>
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    backpag() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header{
  height: 80px;
  border-bottom: 1px solid #bcbcbc;
  background: white;
  line-height: 80px;
  span{
    display: inline-block;
    box-sizing: border-box;
    width: 25%;
    font-size: 30px;
  }
  .app-header-left{
    padding-left: 45px;
    img{
      height: 38px;
      width: 38px;
      /*vertical-align: middle;*/
    }
  }
  .app-header-title{
    text-align: center;
    width: 50%;
  }
  .app-header-right{
    padding-right: 12px;
  }

}
</style>
