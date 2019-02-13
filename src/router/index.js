import Vue from 'vue';
import VueRouter from 'vue-router';

import Coins from '../components/Coins'
import Test from '../components/HelloWorld';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Coins,
    },
    {
      path: '/test',
      component: Test
    }
  ]
})

export default router;
