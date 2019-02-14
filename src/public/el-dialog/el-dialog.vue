<template>
    <div class="el-dialog" v-if="isShow">
      <div class="el-dialog-title">{{title}}</div>
      <div class="el-dialog-content">{{content}}</div>
      <span class="el-dialog-confirm_primary" @click="_confirm">确定</span>
    </div>
</template>

<script>
export default {
  name: 'el-dialog',
  data() {
    return {
    };
  },
  methods: {
    _confirm() {
      this.$props.confirm();
      this.$emit('update:isShow', false);
    },
  },
  props: ['title', 'content', 'confirm', 'isShow'],
};
</script>

<style lang="scss" scoped>
  @function rem($px){
    @return $px/75#{rem};
  }
  .el-dialog{
    margin: 0 auto;
    background: cadetblue;
    overflow: hidden;
    width: 80%;
    height: rem(200);
    border-radius: rem(5);
    max-width: rem(300);
    text-align: center;
    .el-dialog-title{
      padding: rem(50);
      box-sizing: border-box;
    }
    .el-dialog-content{
      margin-top: rem(-40);
    }
    .el-dialog-confirm_primary{
      display: block;
      margin: auto;
      height: rem(40);
      line-height: rem(40);
      color: #fff;
      width: 70%;
      border: none;
      border-radius: rem(25);
      font-size: rem(20);
      background: #3C9DFC;
      outline: none;
      text-align: center;
      margin-top: rem(30);
    }
  }
</style>
