<template>
  <div class="login">
    <input class="inp" v-model="userInfo.phoneNumber" type="text" placeholder="请输入手机号码"><br>
    <input class="inp" v-model="userInfo.password" type="text" placeholder="亲输入6-12位密码"><br>
    <span>已有账户，<a href="">忘记密码?</a></span><br>
    <button @click="login">登录</button>
  </div>
</template>

<script>
/* eslint-disable no-console,arrow-parens,no-alert */

export default {
  name: 'login',
  data() {
    return {
      userInfo: {
        phoneNumber: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$apis.login(this.userInfo)
        .then(data => {
          console.log(data);
          if (data.data.code === 3001) {
            this.$notify({
              message: '登录成功！',
              duration: 800,
              background: '#67C23A',
              color: 'white',
            });
            this.$router.push('/auth/home');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  margin: 20px auto;
   .inp {
    width: 80%;
    height: 88px;
    margin: 0 auto;
    display: block;
    border: none;
    border-bottom: 1px solid #dddddd;
    font-size: 28px;
    outline: none;
    padding-left: 32px;
    color: #000;
  }
  span {
    margin-right: 9%;
    display: block;
    text-align: right;
    font-size: 25px;
    color: #333333;
    margin-top: 32px;
  }
  button {
    display: block;
    margin: 90px auto;
    width: 70%;
    height: 80px;
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 32px;
    background: #196fe3;
    outline: none;
  }
  a {
    text-decoration: none;
    color: #196fe3;
  }
  ::-webkit-input-placeholder {
    color: #c7c7c8;
  }
}
</style>
