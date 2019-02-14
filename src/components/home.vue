<template>
  <div class="home">
    <home-header></home-header>
    <home-center></home-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from './home-header';
import homeCenter from './home-center';
import homeFooter from './home-footer';

export default {
  name: 'home',
  components: { homeHeader, homeCenter, homeFooter },
};
</script>

<style scoped>
.home{
  background: #f6f6f6;
}
</style>
