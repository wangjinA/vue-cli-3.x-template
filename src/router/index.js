import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


// tabbar页面，提取出来做for循环
const tabPages = [
  {
    path: '/',
    component: resolve => require(['@/pages/home'], resolve), // 路由懒加载方式，'@/' webpack配置默认的别名，指向src/
    meta: {
      title: '首页', // 用来做head组件 "标题" 引用
      tabbar: true, // 当前页面是否需要底部导航 "tabbar" 按钮
      notBack: true // head组件是否需要 "返回" 按钮
    }
  }, {
    path: '/trip',
    component: resolve => require(['@/pages/trip'], resolve),
    meta: {
      title: '工作空间',
      tabbar: true,
      notBack: true
    }
  }, {
    path: '/me',
    component: resolve => require(['@/pages/me'], resolve),
    meta: {
      title: '个人中心',
      tabbar: true,
      notBack: true
    }
  }
]

const router = new Router({
  tabPages, // tabbar组件配置，可以通过this.$router.options.tabPages
  linkExactActiveClass: "active", // <router-link>选中的class，用来做底部tabbar选中状态样式高亮
  routes: [
    ...tabPages,
    {
      path: '/notTab',
      component: resolve => require(['@/pages/notTab'], resolve),
      meta: {
        title: 'notTabPage',
      }
    }
  ]
})
export default router