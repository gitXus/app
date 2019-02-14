<template>
  <div class="searchMain">
    <div class="header">
      <span class="customer"><i class="iconfont icon-kefu"></i></span>
      <span class="inp">
          <input @click="toSearch" type="text" placeholder="笔记本电脑">
        <img class="search" src="../assets/search.png" alt="">
        </span>
      <span class="shopping">搜索</span>
    </div>
    <div class="searchMain-nav">
      <span class="searchMain-nav_title">综合</span>
      <span class="searchMain-nav_title">销量</span>
      <span class="searchMain-nav_title">价格</span>
    </div>
    <div class="searchMain-text">
      <div @click="toDetails(key)" class="text-main" v-for="(item,key) in search" :key="key">
        <span class="text-main_img"><img :src="item.prodImage[0]" alt=""></span>
        <div class="text-main_text">
          <p class="main-text_title">{{ item.prodSupTitle }}</p>
          <p class="main-text_stock">原价:{{ item.originPrice }}</p>
          <p class="main-text_price">券后价&yen;{{ item.currentPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchMain',
  data() {
    return {
      search: {},
    };
  },
  methods: {
    toSearch() {
      this.$router.push('search');
    },
    toDetails(key) {
      this.$router.push({ name: 'details', params: { pics: this.search[key] } });
    },
  },
  created() {
    this.search = this.$route.params.sm;
  },
};
</script>

<style lang="scss" scoped>
  .searchMain{
    height: 100%;
    background: #f2f2f2;
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
    .searchMain-nav {
      height: 92px;
      line-height: 92px;
      background: white;
      margin-bottom: 10px;
      padding-left: 30px;
      box-sizing: border-box;
      .searchMain-nav_title {
        display: inline-block;
        margin-right: 70px;
        font-size: 26px;
        color: #202020;
      }
    }
      .searchMain-text{
        height: 100%;
        background: white;
        .text-main{
          height: 168px;
          .text-main_img{
            display: inline-block;
            width: 146px;
            height: 168px;
            vertical-align: middle;
            margin-left: 40px;
            img{
              width: 146px;
              height: 168px;
            }
          }
          .text-main_text{
            width: 555px;
            height: 168px;
            display: inline-block;
            vertical-align: middle;
            padding-left: 30px;
            box-sizing: border-box;
            position: relative;
            font-size: 25px;
            border-bottom: 1px solid #f0f0f0;
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
          }
        }
      }
  }
</style>
