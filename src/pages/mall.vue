<template>
    <div class="mall">
      <div class="header">
        <span class="customer"><i class="iconfont icon-kefu"></i></span>
        <span class="inp">
          <input @click="search" type="text" placeholder="笔记本电脑">
          <img class="search" src="../assets/search.png" alt="">
        </span>
        <span class="shopping"><i class="iconfont icon-cart_icon"></i></span>
      </div>
      <!--头部导航栏-->
      <div class="tabBar">
        <van-tabs :swipeable="true"
                  color="#2864d9"
                  class="nav"
                  border='false'>
          <van-tab v-for="item in nav" :key="item">
            <div slot="title">
              <van class="title">{{ item }}</van>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <!--轮播图-->
      <div class="chart">
        <van-swipe :autoplay="3000"
                   indicator-color="white"
                   class="banners"
        >
          <van-swipe-item class="banner"  v-for="(item, key) in banner"
                          :key="key">
            <img class="banner-pic" :src="item.bannerUrl" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--超值百货-->
      <div class="option">
        <div class="option-box">
          <span class="option-box_pic picOne"><i class="iconfont icon-zuichun"></i></span>
          <span class="option-box_text">美妆护肤</span>
        </div>
        <div class="option-box">
          <span class="option-box_pic picTwo"><i class="iconfont icon-shoubiao"></i></span>
          <span class="option-box_text">名品腕表</span>
        </div>
        <div class="option-box">
          <span class="option-box_pic picThree"><i class="iconfont icon-jiajujiafang"></i></span>
          <span class="option-box_text">超值家纺</span>
        </div>
        <div class="option-box">
          <span class="option-box_pic picFour"><i class="iconfont icon-lv_zuanshi"></i></span>
          <span class="option-box_text">潮流饰品</span>
        </div>
        <div class="option-box">
          <span class="option-box_pic picFive"><i class="iconfont icon-shangcheng"></i></span>
          <span class="option-box_text">时尚箱包</span>
        </div>
        <div class="option-frame">
          <span class="option-frame_pic">
            <img src="../assets/zhe1.jpg" alt="">
          </span>
          <span class="option-frame_pic">
            <img src="../assets/zhe2.jpg" alt="">
          </span>
        </div>
      </div>
      <!--限时秒杀-->
      <div class="spike">
        <div class="spike-text">
          <span class="text spike-text_left">限时秒杀</span>
          <span class="text spike-text_right">
            距离结束还有：
            <i>{{ `${hours}` }}</i>:
            <i> {{`${minutes}`}}</i>:
            <i>{{`${seconds}`}}</i>
          </span>
        </div>
        <div class="spike-pic">
          <ul class="pic-box">
            <li class="pic" v-for="(item,key) in userSeck.prodImage"
                :key="key" @click="pic(key)">
              <img  class="img" :src="item.prodImage[0]" alt="">
              <p><span class="text">券后价</span>&yen;{{ item.killPrice }}</p>
            </li>
          </ul>
        </div>
      </div>
      <!--精选活动-->
      <div class="active">
        <span class="title">精选活动</span>
        <div class="commodity" v-for="(item,key) in commodity"
             :key="key">
          <div class="commodity-pic">
            <img src="../assets/jx6.png" alt="">
          </div>
          <span class="commodity-smallPic">
            <span class="pic-img">
              <img @click="to(key)" :src="item.prodImage[0]" alt="">
              <p>
                <span class="text">券后价</span>
                &yen;{{ item.originPrice }}
                <del>&yen;{{ item.currentPrice }}</del>
              </p>
            </span>
            <span class="pic-img">
              <img @click="to(key)" :src="item.prodImage[1]" alt="">
              <p>
                <span class="text">券后价</span>
                &yen;{{ item.originPrice }}
                <del>&yen;{{ item.currentPrice }}</del>
              </p>
            </span>
            <span class="pic-img">
              <img @click="to(key)" :src="item.prodImage[2]" alt="">
              <p>
                <span class="text">券后价</span>
                &yen;{{ item.originPrice }}
                <del>&yen;{{ item.currentPrice }}</del>
              </p>
            </span>
          </span>
        </div>
        <!--为你推荐-->
        <div class="recommend">
          <span class="title">为你推荐</span>
          <div class="recommend-shop" v-for="(item,key) in commodity"
               :key="key">
          <span class="recommend-pic">
            <img @click="to(key)" :src="item.prodImage[0]" alt="">
          </span>
            <span class="recommend-text">
            <span class="text text-title">{{ item.prodSupTitle }}</span>
            <span class="text text-couponPrice">券后价：{{ item.currentPrice }}</span>
            <span class="text text-originalPrice">原价：{{ item.originPrice }}</span>
          </span>
          </div>
        </div>
        <home-footer></home-footer>
      </div>
      </div>
</template>

<script>
/* eslint-disable arrow-parens,no-console,no-undef,radix,no-unused-expressions,no-plusplus,no-unused-vars,no-mixed-operators,max-len */

import homeFooter from '../components/home-footer';

export default {
  name: 'mall',
  data() {
    return {
      imageList: [
        '../../assets/1.jpg',
        '../../assets/2.jpg',
        '../assets/3.jpg',
        '../assets/4.jpg',
      ],
      nav: ['推荐', '美妆护肤', '超值百货', '品质家电', '名腕手表', '电子配件', '手机数码', '运动鞋服', '时尚箱包', '精致闪耀', '日用百货'],
      banner: [],
      commodity: [],
      image: [],
      userSeck: {
        prodImage: [],
        prodSubTitle: '',
        prodSupTitle: '',
        killPrice: Number,
        remainNumber: Number,
      },
      times: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      objTimer: null,
      clearTimer: [],
    };
  },
  methods: {
    // 定时器
    showTime() {
      const hours = parseInt(this.times / 60 / 60);
      const minutes = parseInt(this.times / 60) % 60;
      const seconds = this.times % 60;
      // 显示
      hours < 10 ? (this.hours = `0${hours}`) : (this.hours = hours);
      minutes < 10 ? (this.minutes = `0${minutes}`) : (this.minutes = minutes);
      seconds < 10 ? (this.seconds = `0${seconds}`) : (this.seconds = seconds);
      // 倒计时
      this.times--;
    },
    pic(key) {
      this.$router.push({ name: 'details', params: { pics: this.userSeck.prodImage[key] } });
    },
    to(key) {
      this.$router.push({ name: 'details', params: { pics: this.commodity[key] } });
    },
    search() {
      this.$router.push('search');
    },
  },
  components: { homeFooter },
  created() {
    // 定时器
    const data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    hour = 24 - hour - 1;
    minute = 60 - minute;
    second = 60 - second;
    this.times = (hour * 69 + minute) * 60;
    if (this.objTimer === null) {
      this.objTimer = setInterval(this.showTime, 1000);
    }
    // 轮播图
    this.$apis.addBanner()
      .then(res => {
        console.log(res);
        if (res.data.code === 10020) {
          // console.log()
          console.log(res.data.data);
          this.banner = res.data.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
    // 获取商品
    this.$apis.obtainCommodity({
      prodCategory: 'beauty',
      prodSubClass: 'cosmetics',
      startIndex: 0,
      count: 20,
    })
      .then(res => {
        console.log(res);
        if (res.data.code === 10100) {
          // console.log()
          console.log(res.data.data);
          this.commodity = res.data.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
    // 获取秒杀商品
    this.$apis.seckills(this.userSeck)
      .then(res => {
        console.log(res);
        if (res.data.code === 10040) {
          // console.log()
          console.log(res.data.data);
          this.userSeck.prodImage = res.data.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.mall {
  height: 100%;
  background: #f3f3f3;
  .header {
    line-height: 80px;
    background: white;
    position: relative;
    height: 80px;
    border-bottom: 1px solid #f3f3f3;
    .customer, .shopping {
      width: 9%;
      text-align: center;
      line-height: 80px;
      display: inline-block;
      vertical-align: middle;
      .iconfont {
        font-size: 38px;
      }
    }
    input {
      width: 80%;
      height: 65px;
      border-radius: 15px;
      background: #f5f5f5;
      font-size: 25px;
      color: #89898a;
      border: none;
      padding-left: 60px;
      box-sizing: border-box;
    }
    img{
      width: 50px;
      height: 50px;
      position: absolute;
      top: 15px;
      left: 80px;
    }
  }
  .tabBar{
    height: 75px;
    line-height: 75px;
    .nav{
      .title{
        display: inline-block;
        height: 75px;
        line-height: 75px;
        font-size: 25px;
      }
    }
  }
  .chart{
    height: 300px;
    .banners{
      .banner{
        width: 600px;
        height: 300px;
        .banner-pic{
          height: 300px;
          width: 100vw;
          background-size: cover;
        }
      }
    }
  }
  .option{
    height: 400px;
    text-align: center;
    margin-bottom: 20px;
    background: white;
    .option-box{
      display: inline-block;
      width: 19%;
      height: 168px;
      text-align: center;
      .option-box_pic{
        margin: 20px auto;
        line-height: 90px;
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        .iconfont{
          display: inline-block;
          font-size: 68px;
          color: white;
        }
      }
      .picOne{background: #e27dbe;}
      .picTwo{background: #f2b675;}
      .picThree{background: #ee8e7b;}
      .picFour{background: #7977f7;}
      .picFive{background: #9778f5;}
      .option-box_text{
        font-size: 20px;
      }
    }
    .option-frame{
      height: 210px;
      text-align: center;
      .option-frame_pic{
        width: 340px;
        height: 180px;
        display: inline-block;
        border-radius: 14px;
        background: azure;
        margin: 14px 10px;
        img{
          width: 340px;
          height: 180px;
        }
      }
    }
  }
  .spike{
    height: 365px;
    background: white;
    margin-bottom: 25px;
    .spike-text{
      height: 105px;
      padding-top: 30px;
      box-sizing: border-box;
      /*line-height: 105px;*/
      font-size: 30px;
      color: black;
      .text{
        vertical-align: middle;
        display: inline-block;
        width: 39%;
        padding-left: 30px;
        box-sizing: border-box;
      }
      .spike-text_right{
        width: 59%;
        i{
          vertical-align: middle;
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          background: #428cf8;
          margin:0 5px;
          color: white;
          font-size: 15px;
          font-style: normal;
          text-align: center;
        }
      }
    }
    .spike-pic{
      height: 255px;
      background: white;
      overflow: hidden;
      .pic-box{
        width: 1000vw;
        height: 255px;
        .pic{
          display: inline-block;
          width: 185px;
          height: 255px;
          margin-left: 20px;
          position: relative;
          p{
            position: absolute;
            bottom:0;
            margin: 0;
            left: 20px;
            .text{
              display: inline-block;
              text-align: center;
              width: 85px;
              line-height: 30px;
              height: 30px;
              border-radius: 15px;
              color: white;
              background: #458df7;
            }
          }
          .img{
            width: 180px;
            height: 220px;
          }
          p{
            font-size: 20px;
            color: black;
          }
        }
      }
    }
  }
  .active{
    background: white;
    .title{
      height: 115px;
      line-height: 115px;
      padding-left: 30px;
      box-sizing: border-box;
      font-size: 30px;
    }
    .commodity{
      height: 410px;
      text-align: center;
      .commodity-pic{
        width: 700px;
        height: 130px;
        background: palevioletred;
        margin: 0 auto;
        img{
          width: 100%;
          height: 130px;
        }
      }
      .commodity-smallPic{
        margin: 0 auto;
        width: 700px;
        height: 285px;
        display: block;
        overflow: hidden;
        .pic-img{
          display: inline-block;
          text-align: center;
          width: 225px;
          height: 285px;
          position: relative;
          p{
            position: absolute;
            bottom:35px;
            margin: 0;
            left: 40px;
            del{
              color: #b9b9b9;
              display: inline-block;
              margin-left: 10px;
            }
            .text{
              display: block;
              text-align: center;
              width: 85px;
              line-height: 30px;
              height: 30px;
              border-radius: 15px;
              color: white;
              background: #458df7;
            }
          }
          img{
            margin-top: 30px;
            width: 140px;
            height: 160px;
          }
        }
      }
    }
  }
  .recommend{
    margin: 40px 0;
    background: white;
    .title{
      height: 115px;
      width: 100vw;
      line-height: 115px;
      padding-left: 30px;
      box-sizing: border-box;
      font-size: 30px;
    }
    .recommend-shop{
      margin-bottom: 20px;
      height: 200px;
      .recommend-pic{
        vertical-align: middle;
        width: 230px;
        height: 200px;
        display: inline-block;
        margin-left: 30px;
        img{
          width: 200px;
          height: 200px;
        }
      }
      .recommend-text{
        vertical-align: middle;
        display: inline-block;
        width: 480px;
        height: 200px;
        font-size: 25px;
        .text{
          display: block;
          height: 60px;
          margin-top: 10px;
        }
        .text-title{
          color: black;
        }
        .text-couponPrice{
          color:#4992f6;
        }
        .text-originalPrice{
          color:#b5b5b5;
        }
      }
    }
  }
}
</style>
