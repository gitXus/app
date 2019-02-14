<template>
  <div class="details">
    <div class="app-header">
      <span class="text app-header_left"><img src="../assets/fanhui.png" alt=""></span>
      <span class="text app-header_center">
        <span>商品</span>
        <span>详情</span>
      </span>
      <span class="text app-header_right"><img src="../assets/zhuanfa.png" alt=""></span>
    </div>
    <!--类似轮播图-->
    <div class="banner">
      <van-swipe @change="onChange">
        <van-swipe-item v-for="item in userSeck.prodImage"
        :key="item"><img :src="item" alt=""></van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{ userNumber }}</div>
      </van-swipe>
    </div>
    <!--价格参数-->
    <div class="parameters">
      <div class="parameters-commodity">
        <p class="title">{{ userSeck.prodSupTitle }}</p>
        <span class="tips">该商品最高可使用30元优惠券</span>
        <span class="price">&yen;{{ userSeck.currentPrice }}</span>
      </div>
      <div class="parameters-quality">
        <span class="goods"><img src="../assets/zhengpinbaozhang2.png" alt="">100%正品保障</span>
      </div>
      <div class="parameters-address">
        <span class="delivery">配送至</span>
      </div>
      <div class="parameters-selected">
        <span class="selected">已选</span>
      </div>
    </div>
    <!--商品详情-->
    <div class="ware">
      <span class="title">商品详情</span>
      <span class="pic"
      v-for="item in userSeck.prodImage"
      :key="item">
        <img :src="item" alt="">
      </span>
    </div>
    <!--加入购物车-->
    <div class="app-footer">
      <span class="icon">
        <i @click="add" class="iconfont icon-cart_icon"></i>
      </span>
      <span class="btn">
        <button @click="add" class="add">加入购物车</button>
        <button class="once">立即购买</button>
      </span>
    </div>
    <div v-if="isShow" class="cart">
      <div class="main">
        <div class="main-header">
          <div class="main-pic"
               v-for="item in userSeck.prodImage"
               :key="item">
            <img :src="item" alt="">
          </div>
          <div class="main-text">
            <p class="text-price">&yen;{{ userSeck.currentPrice }}</p>
            <p class="text-title">{{ userSeck._id }}</p>
          </div>
        </div>
        <div class="main-center">
          <span class="math">数量</span>
          <div class="btn">
            <div class="numbers">
              <i class="minus" @click="reduceShop">-</i>
              <i class="number">{{ count }}</i>
              <i class="plus" @click="addShop">+</i>
            </div>
          </div>
        </div>
        <div class="main-footer">
          <button @click="addcart">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle,arrow-parens,no-console,no-plusplus */

export default {
  name: 'details',
  data() {
    return {
      current: 0,
      userSeck: {},
      userNumber: Number,
      isShow: false,
      count: 1,
    };
  },
  methods: {
    // 数量加
    addShop() {
      this.count++;
    },
    // 数量减
    reduceShop() {
      if (this.count > 1) {
        this.count--;
      }
    },
    onChange(index) {
      this.current = index;
    },
    add() {
      this.isShow = true;
    },
    addcart() {
      this.$apis.addCart({ prodid: this.userSeck._id, num: this.count })
        .then(res => {
          console.log(res);
          this.$router.push('cart');
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  created() {
    this.userSeck = this.$route.params.pics;
    this.userNumber = this.userSeck.prodImage.length;
  },
};
</script>

<style lang="scss" scoped>
.details{
  height: 100%;
  background: #f3f3f3;
  .app-header{
    position: fixed;
    top: 0;
    width: 100vw;
    background: white;
    z-index: 2;
    height: 80px;
    .text{
      font-size: 30px;
      display: inline-block;
      height: 80px;
      width: 30%;
      line-height: 80px;
    }
    .app-header_left{
      margin-left: 20px;
      img{
        width: 38px;
        height: 38px;
      }
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
      padding-left: 10px;
      box-sizing: border-box;
      img{
        width: 38px;
        height: 38px;
      }
    }
  }
  .banner{
    height: 750px;
    background: white;
    margin-bottom: 25px;
    margin-top: 100px;
    position: relative;
    .custom-indicator{
      width: 80px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 20px;
      background: #e2e2e2;
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
    img{
      width: 750px;
      height: 750px;
    }
  }
  .parameters{
    height: 530px;
    background: white;
    margin-bottom: 15px;
    .parameters-commodity{
      height: 175px;
      border-bottom: 1px solid #ededed;
      .title{
        display: block;
        font-size: 30px;
        color: black;
        margin: 30px 0 20px 30px;
        padding-top: 20px;
        box-sizing: border-box;
      }
      .tips{
        display: block;
        font-size: 22px;
        color:#d45f5e;
        margin-left: 30px;
        margin-bottom: 25px;
      }
      .price{
        display: block;
        font-size: 26px;
        color: #7a7a7a;
        margin-left: 30px;
      }
    }
    .parameters-quality{
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid #ededed;
      .goods{
        font-size: 25px;
        color: #717171;
        margin-left: 30px;
        img{
          width: 30px;
          height: 30px;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }
    .parameters-address{
      height: 145px;
      border-bottom: 1px solid #ededed;
      .delivery{
        display: block;
        margin-left: 30px;
        margin-top: 32px;
        color: #717171;
        font-size: 25px;
      }
    }
    .parameters-selected{
      height: 80px;
      line-height: 80px;
      .selected{
        display: block;
        font-size: 25px;
        color: #717171;
        margin-left: 30px;
      }
    }
  }
  .ware{
    height: 560px;
    background: white;
    .title{
      display: block;
      height: 95px;
      line-height: 95px;
      font-size: 30px;
      margin-left: 32px;
    }
    .pic{
      display: block;
      height: 465px;
      width: 750px;
      img{
        height: 465px;
        width: 750px;
      }
    }
  }
  .app-footer{
    width: 100%;
    height: 105px;
    line-height: 105px;
    background: white;
    position: fixed;
    bottom: 0;
    .icon{
      width: 29%;
      display: inline-block;
      text-align: center;
      .iconfont{
        font-size: 45px;
      }
    }
    .btn{
      width: 69%;
      display: inline-block;
      text-align: center;
      font-size: 0;
      button{
        border: none;
        display: inline-block;
        width: 45%;
        height: 78px;
        line-height: 78px;
        font-size: 30px;
        color: white;
      }
      .add{
        border-radius: 39px 0 0 39px;
        background: #f87c2d;
      }
      .once{
        border-radius: 0 39px 39px 0;
        background: #3c9dfc;
      }
    }
  }
}
.cart{
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1000px;
  background: rgba(0,0,0,.5);
  .main{
    width: 100%;
    height: 960px;
    background: white;
    position: fixed;
    bottom: 0;
    .main-header{
      height: 200px;
      width: 690px;
      margin: 0 auto;
      position: relative;
      border-bottom: 1px solid #dddddd;
      .main-pic{
        width: 220px;
        height: 220px;
        border-radius: 10px;
        position: absolute;
        left: 0;
        bottom: 45px;
        border: 1px solid #f2f2f2;
        img{
          width: 220px;
          height: 220px;
        }
      }
      .main-text{
        width: 450px;
        height: 155px;
        font-size: 30px;
        margin-left: 240px;
        p{
          margin: 0;
          box-sizing: border-box;
        }
        .text-price{
          padding-top: 40px;
          color: red;
        }
        .text-title{
          padding-top: 20px;
          color: black;
        }
      }
    }
    .main-center{
      width: 690px;
      margin: 25px auto;
      .math{
        display: inline-block;
        font-size: 30px;
        margin-top: 20px;
        vertical-align: middle;
      }
      .btn{
        .numbers{
          width: 185px;
          border:1px solid #cacaca;
          border-radius: 10px;
          height: 53px;
          position: absolute;
          left:15%;
          top: 235px;
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
    }
    .main-footer{
      height: 90px;
      position: absolute;
      bottom: 0;
      button{
        border: none;
        text-align: center;
        color: white;
        display: block;
        font-size: 30px;
        height: 90px;
        width: 100vw;
        line-height: 90px;
        letter-spacing: 10px;
        background: #3d9dfd;
      }
    }
  }
}
</style>
