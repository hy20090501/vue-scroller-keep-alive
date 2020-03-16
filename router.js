import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);


const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import('./views/Home.vue'),
      meta: {
        title: '首页',
        keepAlive: false //此组件不需要被缓存
      }
    },
    {
      path: '/pageA',
      name: 'pageA',
      component: () =>
          import('./views/pageA.vue'),
      meta: {
        title: 'pageA',
        keepAlive: true,
        isBack: false
      }
    },
    {
      path: '/pageB',
      name: 'pageB',
      component: () =>
          import('./views/pageB.vue'),
      meta: {
        title: 'pageB',
        keepAlive: true,
        isBack: false
      }
    },
    {
      path: '/pageC',
      name: 'pageC',
      component: () =>
          import('./views/pageC.vue'),
      meta: {
        title: 'pageC',
        keepAlive: false
      }
    }
  ]
});

export default router;
