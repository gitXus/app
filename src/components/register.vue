<template>
  <div>
    <input class="inp-text" v-model="registerInfo.phoneNumber" type="text" placeholder="请输入手机号">
    <input class="inp-text" v-model="registerInfo.validCode" type="text" placeholder="请输入手机验证码">
    <input class="inp-text" v-model="registerInfo.password" type="text" placeholder="请输入6-12位密码">
    <van-checkbox class="check" v-model="registerInfo.isAgree">
      我已阅读并同意<a href="#">《商城销售合同》</a>
    </van-checkbox>
    <button @click="reg">注册</button>
    <span @click="getValidCode">获取验证码</span>
    <img  src="../assets/duigou.png" alt="">
  </div>
</template>

<script>
/* eslint-disable arrow-parens,prefer-arrow-callback,no-console,no-alert */

export default {
  name: 'register',
  data() {
    return {
      registerInfo: {
        phoneNumber: '',
        validCode: '',
        password: '',
        isAgree: false,
      },
    };
  },
  methods: {
    getValidCode() {
      this.$apis.getValidCode()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    reg() {
      this.$apis.register(this.registerInfo)
        .then(res => {
          console.log(res);
          if (res.data.code === 2001) {
            this.$notify({
              message: '注册成功！',
              duration: 500,
              background: 'green',
              color: 'white',
            });
            this.$router.push({ path: '/auth/login' });
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
  .inp-text{
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 88px;
    border: none;
    border-bottom: 1px solid #dddddd;
    font-size: 28px;
    padding-left: 32px;
    font-weight: normal;
    outline: none;
    color: #000;
  }
  .check{
    width: 80%;
    font-size: 25px;
    height: 40px;
    margin: 42px auto;
  }
  label{
    display: inline-block;
    margin-top: 10px;
    font-size: 15px;
    color: #B2B2B2;
  }
  button{
    display: block;
    margin: 65px auto;
    width: 70%;
    height: 80px;
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 32px;
    background: #3C9DFC;
    outline: none;
  }
  a{
    text-decoration: none;
    color: #3C9DFC;
  }
  span{
    display:inline-block;
    color:#3C9DFC;
    font-size: 26px;
    position: absolute;
    top: 467px;
    right: 10%;
  }
  ::-webkit-input-placeholder{
    color: #c7c7c8;
  }
</style>
