<template>
  <div class="loan">
    <div class="app-header">
      水象分期
    </div>
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
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from '../components/home-footer';

export default {
  name: 'loan',
  components: { homeFooter },
};
</script>

<style lang="scss" scoped>
  .loan{
    background: white;
    .app-header{
      height: 55px;
      border-bottom: 1px solid #eeeeee;
      text-align: center;
      font-size: 20px;
      line-height: 55px;
    }
    .chart{
      background: cadetblue;
      height: 285px;
      .banners{
        .banner{
          width: 600px;
          height: 285px;
          .banner-pic{
            height: 285px;
            background-size: cover;
          }
        }
      }
    }
  }
</style>
