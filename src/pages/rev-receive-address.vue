<template>
  <div class="rev-receive-address">
    <app-header>修改收货地址</app-header>
    <div class="input-group">
      <label for="receiver">收货人&nbsp;&nbsp;&nbsp;</label>
      <input v-model="revice.receiver" id="receiver" type="text" autocomplete="off">
    </div>
    <div class="input-group">
      <label for="phoneNumber">电话号码</label>
      <input v-model="revice.phoneNumber" id="phoneNumber" autocomplete="off" type="text">
    </div>
    <div class="input-group">
      <label for="location">所在区域</label>
      <input id="location" v-model="revice.location" value="请选择" type="text" autocomplete="off">
    </div>
    <div class="input-group">
      <label for="details-address">详细地址</label>
      <input id="details-address" v-model="revice.details" type="text" autocomplete="off">
    </div>
    <span class="primary-btn" @click="addre">保存</span>
  </div>
</template>

<script>
/* eslint-disable arrow-parens,no-console,no-alert,no-underscore-dangle */

export default {
  name: 'rev-receive-address',
  data() {
    return {
      revice: {
        addrid: '',
        receiver: '',
        location: '',
        details: '',
        phoneNumber: '',
      },
      isShow: false,
    };
  },
  methods: {
    backpag() {
      this.$router.go(-1);
    },
    addre() {
      this.$apis.revAddress(this.revice)
        .then(res => {
          console.log(res);
          if (res.data.code === 8000) {
            this.$dialog({
              title: '提示',
              message: '地址更新成功',
            });
            this.$router.push({ name: 'receive-address' });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  created() {
    this.revice.receiver = this.$route.params.revices.receiver;
    this.revice.phoneNumber = this.$route.params.revices.phoneNumber;
    this.revice.location = this.$route.params.revices.location;
    this.revice.details = this.$route.params.revices.details;
    this.revice.addrid = this.$route.params.revices._id;
  },
  mounted() {
    console.log(this.revice);
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
