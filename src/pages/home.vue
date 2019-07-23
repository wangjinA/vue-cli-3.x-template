<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(src, index) in slideList" :key="index">
        <img :src="src">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <nav>
			<router-link :to="item.link" v-for="(item, index) in navList" :key="index">
				<div class="circular">
					<i :class="['iconfont', item.icon]"></i>
				</div>
				<p>{{item.name}}</p>
			</router-link>
		</nav>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'online',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      slideList: [
        require('@/assets/image/slide1.png'),
        require('@/assets/image/slide2.png'),
        require('@/assets/image/slide3.png'),
        require('@/assets/image/slide4.png'),
        require('@/assets/image/slide5.png')
      ], 
      navList: [
        {
					link: '/notTab',
					name: '商店',
					icon: 'icon-icon_qianbao'
				}, {
					link: '/notTab',
					name: '指南',
					icon: 'icon-icon_luru'
				}, {
					link: '/notTab',
					name: '特惠',
					icon: 'icon-icon_liwu'
				}, {
					link: '/notTab',
					name: '精选',
          icon: 'icon-icon_huangguanhuiyuan'
        }
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
>>>.swiper-pagination-bullet-active
  background-color #ed8f49
.swiper-container
  height 170px
  margin 10px
  border-radius 8px
  box-shadow 0px 1px 8px 0px #ccc
  img
    height 100%
    width 100%
    object-fit cover
nav
  display flex
  padding 15px 7px
  // border-bottom 5px solid #f5f5f5
  a
    flex 1
    display flex
    flex-direction column
    justify-content center
    align-items center
    font-size 13px
    color: #666
    .circular
      height 40px
      width 40px
      border-radius 50%
      background-color red
      display flex
      justify-content center
      align-items center
      color #fff
      margin-bottom 6px
      .iconfont
        font-size 26px
    p
      color #8a8a96
    &:nth-of-type(1) .circular
      background-color #4AD1CD
    &:nth-of-type(2) .circular
      background-color #FF9393
    &:nth-of-type(3) .circular
      background-color #ff75a0
    &:nth-of-type(4) .circular
      background-color #ff9f60
</style>

