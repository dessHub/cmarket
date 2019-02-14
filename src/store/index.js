import Vue from 'vue'; import Vuex from 'vuex'; 
import coinsModule from './modules/coins';
import topListModule from './modules/toplist';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
   coins: coinsModule,
   toplist: topListModule,
  }  
});
