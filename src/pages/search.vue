<template>
  <div class="search">
    <div class="header">
      <span class="customer"><img src="../assets/fanhui.png" alt=""></span>
        <span class="inp">
          <input type="text" placeholder="笔记本电脑" v-model="keyword">
          <img class="search" src="../assets/search.png" alt="">
        </span>
      <span @click="come" class="shopping">搜索</span>
    </div>
    <div class="hotSearch">
      <span class="hotSearch-title">热搜</span>
      <div class="hotSearch-box">
        <span @click="fn(key)" v-for="(index,key) in main" :key="key">{{ index }}</span>
      </div>
    </div>
    <div class="historySearch">
      <span class="historySearch-title">历史搜索</span>
      <div class="historySearch-box">
        <span v-for="(item,key) in word" :key="key">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
/* eslint-disable arrow-parens,no-console */

export default {
  name: 'search',
  data() {
    return {
      searchMain: {},
      keyword: '',
      main: ['保暖内衣', '面膜', '口红', '手表', '保温杯', '洗衣液', '超值大礼包', '华为', '耳机'],
    };
  },
  methods: {
    fn(key) {
      this.keyword = this.main[key];
      this.come();
    },
    come() {
      this.$apis.search({ keyword: this.keyword })
        .then(res => {
          console.log(res);
          this.searchMain = res.data.data;
          this.$router.push({ name: 'searchMain', params: { sm: this.searchMain } });
          this.word.push(this.keyword);
          console.log(this.word);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapState(['word']),
  },
};
</script>

<style lang="scss" scoped>
.search{
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
      position: relative;
    }
    img{
      width: 50px;
      height: 50px;
      position: absolute;
      top: 15px;
      left: 80px;
    }
  }
  .hotSearch{
    height: 312px;
    background: white;
    margin-bottom: 10px;
    .hotSearch-title{
      display: block;
      margin-left: 30px;
      margin-bottom: 20px;
      padding-top: 20px;
      box-sizing: border-box;
      font-size: 28px;
      color: #202020;
    }
    .hotSearch-box{
      height: 230px;
      span{
        display: inline-block;
        height: 50px;
        font-size: 25px;
        color: #7f7f7f;
        border: 1px solid #e5e5e5;
        border-radius: 7px;
        padding: 12px 28px;
        box-sizing: border-box;
        margin-left: 30px;
        margin-bottom: 30px;
      }
    }
  }
  .historySearch{
    height: 100%;
    background: white;
    .historySearch-title{
      display: block;
      height: 95px;
      padding-left: 30px;
      box-sizing: border-box;
      line-height: 95px;
      font-size: 28px;
      color: #202020;
      border-bottom: 1px solid #f7f7f7;
    }
    .historySearch-box{
      height: 100%;
      span{
        display: block;
        height: 90px;
        line-height: 90px;
        font-size: 25px;
        color: #7f7f7f;
        border-bottom: 1px solid #f7f7f7;
        padding-left: 30px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
