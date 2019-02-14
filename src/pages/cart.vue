<template>
  <div class="cart">
    <div class="app-header">
      <span @click="goBack" class="text app-header_left">123</span>
      <span class="text app-header_center">
        <span>购物车</span>
      </span>
      <span v-if="isShow" class="text app-header_right" @click="change">编辑</span>
      <span v-if="!isShow" class="text app-header_right" @click="change">完成</span>
    </div>
    <div class="check">
      <input type="checkbox" id="check" class="checkall" @click="checkAll" v-model="all">
      <label for="check">快捷商城自营</label>
    </div>
    <div class="shop" v-for="(item,key) in info" :key="key">
      <label>
        <input :checked="item.checked" @click="shopCheck(!item.checked,key)" v-model="item.checked"
               class="inp" type="checkbox" />
      </label>
      <img :src="item.prod.prodImage[0]" alt="">
      <div class="shop-text">
        <p class="title">{{ item.prod.prodSubTitle }}</p>
        <p class="price">&yen;{{ item.prod.currentPrice }}</p>
          <div class="btn">
            <div class="numbers">
              <i class="minus" @click="reduceShop(key)">-</i>
              <i class="number">{{ item.num }}</i>
              <i class="plus" @click="addShop(key)">+</i>
            </div>
        </div>
      </div>
    </div>
    <div v-if="!isShow" class="del">
      <span @click="del">删除({{ counts }})</span>
    </div>
    <div v-if="isShow" class="set">
      <div class="set-text_inp">
        <input id="input" class="inp" type="checkbox"
               @click="checkAll" :checked="all" v-model="all">
        <label for="input">合计：&yen;{{ moneySum }}</label>
        <!--<div class="set-text_title">-->
          <!--&lt;!&ndash;<p>已优惠金额:&yen;</p>&ndash;&gt;-->
        <!--</div>-->
      </div>
      <span @click="order">结算({{ count }})</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable arrow-parens,no-console,no-underscore-dangle,no-cond-assign,no-var,no-plusplus */

export default {
  name: 'cart',
  data() {
    return {
      info: [],
      isShow: true,
      all: false,
      checked: false,
      shopBox: [], // 存放商品_id的数组
      moneySum: 0, // 商品总金额
      count: 0, // 结算数量
      counts: 0, // 删除数量
      shopChecked: [], // 存放商品checked的数组
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 编辑
    change() {
      this.isShow = !this.isShow;
      this.all = false;
      for (let i = 0; i < this.info.length; i++) {
        this.info[i].checked = this.all;
      }
      this.shopBox = [];
      this.shopChecked = [];
    },
    // 增加商品
    addShop(key) {
      this.info[key].num++;
      if (this.info[key].checked === true) {
        console.log(this);
        this.moneySum =
          (Number(this.moneySum) + Number(this.info[key].prod.currentPrice)).toFixed(1);
      } else {
        this.moneySum = this.moneySum;
      }
    },
    // 减少商品
    reduceShop(key) {
      if (this.info[key].num > 1) {
        this.info[key].num--;
        if (this.info[key].checked === true) {
          this.moneySum =
            (Number(this.moneySum) - Number(this.info[key].prod.currentPrice)).toFixed(1);
        } else {
          this.moneySum = this.moneySum;
        }
      }
    },
    // 删除接口
    del() {
      this.$apis.deleteCart(this.shopBox)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 快捷商城全选
    checkAll() {
      for (let i = 0; i < this.info.length; i++) {
        this.info[i].checked = !this.all;
        if (this.all === false) {
          this.shopBox.push(this.info[i]._id);
          this.moneySum = this.moneySum + (this.info[i].num * this.info[i].prod.currentPrice);
        } else {
          this.shopBox = [];
          this.moneySum = 0;
        }
      }
      if (this.all === false) {
        this.count = this.info.length;
        this.counts = this.info.length;
      } else {
        this.counts = 0;
        this.count = 0;
      }
    },
    // 商品多选
    shopCheck(check, key) {
      if (check === true) {
        this.shopChecked.push(check);
        this.count++;
        this.counts++;
        this.shopBox.push(this.info[key]._id);
        this.moneySum =
          (Number(this.moneySum) +
            (this.info[key].num * this.info[key].prod.currentPrice)).toFixed(1);
      } else {
        this.shopChecked.splice(this.shopChecked.indexOf(check), 1);
        this.counts--;
        this.count--;
        this.shopBox.splice(this.shopBox.indexOf(this.info[key]._id), 1);
        this.moneySum =
          (Number(this.moneySum) -
            (this.info[key].num * this.info[key].prod.currentPrice)).toFixed(1);
      }
      if (this.shopChecked.length === this.info.length) {
        this.all = true;
      } else {
        this.all = false;
      }
    },
    // 结算--跳转页面并传值
    order() {
      this.$router.push({ name: 'order', params: { order: this.info } });
    },
  },
  created() {
    this.$apis.saveCart()
      .then(res => {
        console.log(res);
        this.info = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.cart{
  background: #f3f3f3;
  .app-header{
    background: white;
    height: 80px;
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
  .check{
    height: 80px;
    background: white;
    line-height: 80px;
    border-bottom: 1px solid #e3e3e3;
    .check-all{
      margin-left: 30px;
      vertical-align: middle;
      label{
        font-size: 30px;
      }
    }
  }
  .shop{
    background: white;
    height: 230px;
    border-bottom: 1px solid #e3e3e3;
    position: relative;
    .inp{
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e3e3e3;
      border-radius: 50%;
      margin: 0 30px;
    }
    img{
      display: inline-block;
      width: 145px;
      height: 145px;
      border: 1px solid #e3e3e3;
      border-radius: 2px;
      vertical-align: middle;
      margin-top: 45px;
    }
    .shop-text{
      vertical-align: middle;
      display: inline-block;
      width: 500px;
      height: 145px;
      font-size: 25px;
      .btn{
        /*position: absolute;*/
        /*bottom: 20px;*/
        /*right: 10px;*/
        /*margin-left: 20px;*/
        /*vertical-align: middle;*/
        /*display: inline-block;*/
        /*width: 180px;*/
        /*height: 55px;*/
        /*font-size: 0;*/
        .numbers{
          width: 185px;
          border:1px solid #cacaca;
          border-radius: 10px;
          height: 53px;
          position: absolute;
          right:2%;
          top: 155px;
          line-height: 53px;
          text-align: center;
          font-size: 0;
          i{
            height: 53px;
            display: inline-block;
            width: 54px;
            font-size: 20px;
            font-style: normal;
            border-right:1px solid #cacaca;
          }
          .number{
            width: 73px;
          }
          .plus{
            border:0;
          }
        }
        button{
          width: 45px;
          height: 55px;
          background: white;
          border: 1px solid #e3e3e3;
          font-size: 25px;
        }
        input{
          font-size: 25px;
          width: 70px;
          height: 53px;
          border: none;
          border-top: 1px solid #e3e3e3;
          border-bottom: 1px solid #e3e3e3;
          text-align: center;
          line-height: 53px;
          padding: 0;
        }
      }
      .title{
        color: black;
        height: 72.5px;
      }
      .price{
        color: red;
        height: 72.5px;
      }
    }
  }
  .del,.set{
    height: 90px;
    width: 100%;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    text-align: right;
    span{
      display: inline-block;
      width: 215px;
      height: 90px;
      background: red;
      color: white;
      font-size: 30px;
      text-align: center;
      line-height: 90px;
    }
  }
  .set{;
    /*text-align: left;*/
    .set-text_inp{
      display: inline-block;
      float: left;
      height: 90px;
      line-height: 90px;
      margin-left: 30px;
      .set-text_title{
        width: 180px;
        font-size: 25px;
        p{
         font-size: 15px;
          span{
            margin-left: 10px;
          }
        }
      }
    }
    span{
      background: #1989fa;
    }
    }
}
</style>
