<template>
    <div class="add-receive-address">
      <app-header>添加地址</app-header>
      <div class="input-group">
        <label for="receiver">收货人&nbsp;&nbsp;&nbsp;</label>
        <input v-model="userInfo.receiver" id="receiver" type="text" autocomplete="off">
      </div>
      <div class="input-group">
        <label for="phoneNumber">电话号码</label>
        <input v-model="userInfo.phoneNumber" id="phoneNumber" autocomplete="off" type="text">
      </div>
      <div class="input-group">
        <label for="location">所在区域</label>
        <input id="location" v-model="userInfo.location" value="请选择" type="text" autocomplete="off">
      </div>
      <div class="input-group">
        <label for="details-address">详细地址</label>
        <input id="details-address" v-model="userInfo.details" type="text" autocomplete="off">
      </div>
      <span class="primary-btn" @click="addre">保存</span>
      <!--<div v-if="$route.meta.needFooter">123456789</div>-->
    </div>
</template>

<script>
/* eslint-disable arrow-parens,no-console,no-alert */
export default {
  name: 'add-receive-address',
  data() {
    return {
      userInfo: {
        receiver: '',
        location: '',
        details: '',
        phoneNumber: '',
        isDefault: false,
      },
      isShow: false,
    };
  },
  methods: {
    addre() {
      this.$apis.getAddr(this.userInfo)
        .then(res => {
          console.log(res);
          if (res.data.code === 4001) {
            this.$dialog({
              title: '提示',
              message: '地址保存成功',
            })
              .then(() => {
                this.$router.push({ name: 'receive-address' });
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group{
  width: 90%;
  height: 80px;
  line-height: 70px;
  margin: 0 auto;
  border-bottom: 1px solid #dddddd;
  label{
    font-size: 25px;
    margin-left: 20px;
  }
  input{
    margin-left: 20px;
    font-size: 20px;
    border: none;
    outline: none;
    height: 70px;
  }
}
  span{
    display: block;
    margin: 80px auto;
    width: 70%;
    height: 50px;
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 20px;
    background: #3C9DFC;
    outline: none;
    text-align: center;
    line-height: 50px;
  }
</style>
