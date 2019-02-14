<template>
  <div class="killing">
    <page-header class="appHeader"></page-header>
    <div class="pic"></div>
    <div class="nav">
      <van-tabs line-width="60" v-model="active">
        <van-tab title="抢购中">
          <div class="title">
            <span>本场还剩</span>
          </div>
          <div class="text">
            <div class="text-main">
              <span class="text-main_img"></span>
              <div class="text-main_text">
                <p class="main-text_title">doodoo夏天小仙女</p>
                <p class="main-text_price">限时价</p>
                <p class="main-text_stock">库存剩余19件</p>
                <button class="btn-off">马上抢</button>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="即将开抢">
          <div class="title">
            <span>即将开始</span>
          </div>
          <div class="text">
            <div class="text-main">
              <span class="text-main_img"></span>
              <div class="text-main_text">
                <p class="main-text_title">松下撒的发生的</p>
                <p class="main-text_price">限时价</p>
                <p class="main-text_stock">限量20件</p>
                <button class="btn-soon">即将开抢</button>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import pageHeader from '../public/appHeader/page-header';

export default {
  name: 'killing',
  data() {
    return {
      active: 1,
    };
  },
  components: { pageHeader },
};
</script>

<style lang="scss" scoped>
.killing{
  .appHeader{
    margin-bottom: 0;
  }
  background: #f2f2f2;
  .pic{
    height: 300px;
    border-top: 1px solid #bcbcbc;
  }
  .nav{
    background: #f2f2f2;
    van-tab{
      background: white;
      margin-bottom: 10px;
      height: 84px;
    }
    /deep/ .van-ellipsis{
      margin-top: 10px;
      font-size: 25px;
    }
    /deep/ .van-tabs .van-tab__pane{
      margin-top: 40px;
    }
    /deep/ .van-tab--active{
      color: #5095f5;
    }
    /deep/ .van-tabs__line{
      background-color: #5095f5;
    }
    .title{
      height: 82px;
      line-height: 82px;
      background: white;
      text-align: center;
      border-bottom: 1px solid #f2f2f2;
    }
    .text{
      height: 100%;
      background: white;
      .text-main{
        height: 290px;
        padding-top: 55px;
        box-sizing: border-box;
        .text-main_img{
          display: inline-block;
          width: 230px;
          height: 160px;
          vertical-align: middle;
        }
        .text-main_text{
          width:482px;
          height: 160px;
          display: inline-block;
          vertical-align: middle;
          position: relative;
          font-size: 25px;
          .main-text_title{
            color: #242424;
          }
          .main-text_price{
            color: #e64c45;
          }
          .main-text_stock{
            color: #a2a2a2;
            font-size: 20px;
          }
          button{
            width: 192px;
            height: 55px;
            border-radius: 25px;
            border: none;
            font-size: 30px;
            position: absolute;
            right: 0;
            bottom: 0;
          }
          .btn-off{
            background: #ef9949;
            color: white;
          }
          .btn-soon{
            background: #f2f2f2;
            color: #838383;
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>
