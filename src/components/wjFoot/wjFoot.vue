<template>
  <footer class="top-line tabbar-footer">
    <router-link v-for="(item, index) in tabPages" :key="index" :to="item.path">
      {{item.meta.title}}
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'wjFoot',
  computed: {
    tabPages () {
      return this.$router.options.tabPages
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabbar-footer 
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: fixed!important;
  bottom: 0;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  background-color: #fff;
  >a 
    flex: 1;
    display: flex;
    font-size: 12px;
    justify-content: center;
    color: #999;
    align-items: flex-end;
    padding-bottom: 3px;
    background-repeat: no-repeat;
    background-size: 23px;
    background-position: center 5px;
    &.active 
      color: #ed8f49;
    &:nth-of-type(1)
      background-image: url('~@/assets/image/Home.png');
    &:nth-of-type(2) 
      background-image: url('~@/assets/image/Trip.png');
    &:nth-of-type(3) 
      background-image: url('~@/assets/image/Me.png');
    &.active:nth-of-type(1) 
      background-image: url('~@/assets/image/Home_active.png');
    &.active:nth-of-type(2) 
      background-image: url('~@/assets/image/Trip_active.png');
    &.active:nth-of-type(3) 
      background-image: url('~@/assets/image/Me_active.png');
</style>
