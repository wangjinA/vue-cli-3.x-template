<template>
  <div class="maxHeader-wrap">
      <div class="maxHeader bottom-line">
          <span v-if="isBack" onclick="history.back()">
              <i class="iconfont icon-fanhui2"></i>
          </span>
          <div class="title">{{title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'wjHead',
  props: {
    isBack: {
      type: Boolean,
      default: true
    },
    title: String
  }
}
</script>


<style lang="stylus" scoped>
.maxHeader-wrap
  height 45px
  .maxHeader
    height 45px
    line-height 45px
    text-align center
    background-color #fff
    color #333
    font-size 16px
    position fixed!important
    display flex
    justify-content space-between
    padding-right 15px
    align-items center
    z-index 99
    top 0
    left 0
    right 0
    span
      color #333
      height 45px
      line-height 45px
      width 45px
      text-align center
      i
        font-size 20px
    div.title
      position absolute
      left 50%
      transform translateX(-50%)
      width 100%
      z-index -1
</style>
