<template>
  <div id="app">
    <wj-head v-if="title" :isBack="isBack" :title="title"></wj-head>
    <router-view></router-view>
    <wj-foot v-if="showTabbar"></wj-foot>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    title () {
      return this.$route.meta.title
    },
    isBack () {
      return !this.$route.meta.notBack
    },
    showTabbar () {
      return this.$route.meta.tabbar
    }
  }
}
</script>

<style>
</style>
