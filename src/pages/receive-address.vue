<template>
  <div class="receive-address">
    <app-header>收货地址</app-header>
    <div class="add-address" @click="addres(key)" v-for="(item,key) in address" :key="item._id">
      <div class="info">
        <img class="pic-position" src="../assets/position.png" alt="">
        <div>
          <span class="left">{{ item.receiver }}</span>
          <span class="right">{{ item.phoneNumber }}</span>
        </div>
        <div class="address">{{ item.location }}{{ item.details }}</div>
      </div>
      <div class="operate">
        <van-checkbox class="operateItem checkbox" v-model="item.isDefault">设为默认地址</van-checkbox>
        <span class="operateItem delete" @click="delAddr(key)">删除</span>
        <span class="operateItem modification" @click="rev(key)">修改</span>
      </div>
    </div>
    <div class="pic" v-if="!address.length">
      <img class="pic-no" src="../assets/no-address-icon.png" alt="没有收货地址">
      <p>无收货地址</p>
    </div>
    <div class="btn">
      <router-link class="primary-btn" to="/add-receive-address">新增收货地址</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable arrow-parens,no-console,no-underscore-dangle,func-call-spacing,no-undef */
// import Bus from '../bus';

export default {
  name: 'receive-address',
  data() {
    return {
      address: [],
    };
  },
  methods: {
    delAddr(key) {
      this.$apis.delAddress({ addrid: this.address[key]._id })
        .then(res => {
          console.log(res);
          if (res.data.code === 1) {
            this.$dialog.confirm({
              title: '提示',
              message: '确定要删除该条地址吗？',
            }).then(() => {
              this.$notify({
                message: '删除成功！',
                duration: 500,
                background: '#3C9DFC',
                color: 'white',
              });
              this.address.splice(key, 1);
            }).catch(() => {});
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    rev(key) {
      this.$router.push({ name: 'rev-receive-address', params: { revices: this.address[key] } });
    },
    addres(key) {
      this.$router.push({ name: 'order', params: { item: this.address[key] } });
    },
  },
  created() {
    this.$apis.saveAddr()
      .then(res => {
        console.log(res);
        if (res.data.code === 5001) {
          this.address = res.data.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .receive-address{
    background: #f6f6f6;
  }
  .add-address{
    width: 100%;
    margin-bottom: 20px;
    background: white;
  }
  .pic{
    text-align: center;
    vertical-align: middle;
  }
.pic-no{
  display: block;
  margin: 0 auto;
}
  p{
    font-size: 20px;
    color: #ccc;
  }
  .btn {
    height: 105px;
    background: #fff;
    line-height: 105px;
    text-align: center;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    .primary-btn {
      text-decoration: none;
      display: inline-block;
      margin: 0 auto;
      height: 70px;
      line-height: 70px;
      color: #fff;
      width: 80%;
      border: none;
      border-radius: 35px;
      font-size: 20px;
      background: #3C9DFC;
      outline: none;
      text-align: center;
    }
  }
  .info{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #e2e2e2;
    padding: 20px 0;
    box-sizing: border-box;
    position: relative;
    .pic-position{
      position: absolute;
      left: 15px;
      top: 30px;
    }
  }
  span{
    display: inline-block;
    font-size: 25px;
    position: absolute;
  }
  .left{
    left: 80px;
    color: #404040;
  }
  .right{
    right: 40px;
    color: #333333;
  }
  .address{
    font-size: 25px;
    color: #757575;
    position: absolute;
    left: 80px;
    top: 70px;
  }
  input{
    display: inline-block;
    vertical-align: middle;
  }
  .operate {
    height: 80px;
    width: 100vw;
    background-color: #fff;
    font-size: 0;
    position: relative;
    .operateItem {
      display: inline-block;
      font-size: 25px;
      line-height: 80px;
      position: absolute;
    }
    .modification {
      padding-left: 40px;
      box-sizing: border-box;
      right: 160px;
      background: url("../assets/update.png") no-repeat left center;
      background-size: 30%;
    }
    .delete {
      padding-left: 40px;
      box-sizing: border-box;
      right: 40px;
      background: url("../assets/delete.png") no-repeat left center;
      background-size: 35%;
    }
    .checkbox{
      left: 30px;
    }
  }
</style>
