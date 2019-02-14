<template>
  <div class="container">
    <app-header>确认订单</app-header>
    <div class="info" @click="address">
      <img class="pic-position" src="../assets/position.png" alt="">
      <div>
        <span class="left">{{ item.receiver }}</span>
        <span class="right">{{ item.phoneNumber }}</span>
      </div>
      <div class="address">{{ item.location }}{{ item.details }}</div>
    </div>
    <div class="good-item" v-for="(item,key) in order" :key="key">
      <div class="item-img"><img :src="item.prod.prodImage[0]" alt=""></div>
      <span>共{{ count }}件<img src="../assets/next.png"></span>
    </div>
    <div class="pay">
      <ul>
        <li><span>支付方式</span><span>在线支付</span></li>
        <li><span>最高可优惠金额</span><span>30元</span></li>
        <li><span>实际优惠金额</span><span>无可用</span></li>
      </ul>
    </div>
    <div class="price">
      <ul>
        <li><span>商品金额</span><span>￥59.9</span></li>
        <li><span>运费</span><span class="red">￥0</span></li>
      </ul>
    </div>
    <div class="sum-price">
      <span>合计：</span>
      <span>￥59.9</span>
    </div>
    <button @click="pay">立即下单</button>
  </div>
</template>

<script>
/* eslint-disable no-console,no-undef,arrow-parens,no-underscore-dangle,no-shadow,no-plusplus */
// import Bus from '../bus';

import appHeader from '../public/appHeader/app-header';

export default {
  name: 'order',
  data() {
    return {
      item: [],
      order: [],
      orders: {
        carts: [],
        addr: '',
        payStatus: 0,
      },
      orderid: '',
      count: 0, // 件数
    };
  },
  methods: {
    address() {
      this.$router.push('receive-address');
    },
    pay() {
      this.orders.addr = this.item._id;
      console.log(this.orders.addr);
      this.$apis.order(this.orders)
        .then(res => {
          console.log(res.data);
          if (res.data.code === 1) {
            this.orderid = res.data.data._id;
            this.$apis.payShop(this.orderid)
              .then(res => {
                console.log(res.data);
                window.open(res.data.data);
              })
              .catch(res => {
                console.log(res.data);
              });
          }
        })
        .catch(res => {
          console.log(res.data);
        });
    },
  },
  components: { appHeader },
  created() {
    this.order = this.$route.params.order;
    console.log(this.order);
    for (let i = 0; i < this.order.length; i++) {
      this.orders.carts.push(this.order[i]._id);
      this.count = this.count + this.order[i].num;
    }
    console.log(this.orders.carts);
    // this.items = this.$route.params.item;
    this.$apis.saveAddr()
      .then(res => {
        console.log(res);
        if (res.data.code === 5001) {
          this.item = res.data.data[0];
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
  .container{
    background: #f0eff5;
    .info{
      width: 100%;
      height: 120px;
      border-bottom: 4px dashed paleturquoise;
      padding: 20px 0;
      box-sizing: border-box;
      position: relative;
      background: white;
      .pic-position{
        position: absolute;
        left: 15px;
        top: 30px;
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
    }
    .good-item{
      height: 224px;
      margin-bottom: 12px;
      background: white;
      padding: 28px 0 0 42px;
      box-sizing: border-box;
      position: relative;
      .item-img{
        display: inline-block;
        height: 156px;
        width: 156px;
        border:1px solid;
        img{
          width: 156px;
          height: 156px;
        }
      }
      span{
        color: #585858;
        font-size: 27px;
        position: absolute;
        top: 90px;
        right: 60px;
        img{
          vertical-align: middle;
        }
      }
    }
    .pay{
      height: 246px;
      margin: 2px 0;
      background-color: white;
      ul{
        position: relative;
        li{
          line-height: 80px;
          padding-left: 27px;
          box-sizing: border-box;
          span:nth-child(1){
            color: #606060;
            font-size: 25px;
          }
          span:nth-child(2){
            font-size: 29px;
            position: absolute;
            right: 59px;
          }
        }
      }
    }
    .price{
      width: 100vw;
      height: 165px;
      background-color: white;
      ul{
        position: relative;
        li{
          line-height: 80px;
          padding-left: 27px;
          box-sizing: border-box;
          span:nth-child(1){
            color: #606060;
            font-size: 25px;
          }
          span:nth-child(2){
            font-size: 29px;
            position: absolute;
            right: 59px;
          }
          .red{
            color: red;
          }
        }
      }
    }
    .sum-price{
      margin-top: 12px;
      height: 84px;
      background-color: white;
      line-height: 84px;
      padding-left: 540px;
      box-sizing: border-box;
      span:nth-child(1){
        color: #595959;
        font-size: 27px;
      }
      span:nth-child(2){
        font-size: 24px;
        color: red;
      }
    }
    button{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 83px;
      line-height: 83px;
      border: none;
      text-align: center;
      color: white;
      background-color: #579cf6;
    }
  }
</style>
