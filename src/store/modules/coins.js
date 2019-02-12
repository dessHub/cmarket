import axios from 'axios';

export default {
  namespaced: true,
  state: {
    coins: null,
    isFetching: false,
  },
  actions: {
    getCoins({ commit }) {
      commit('fetchingCoins');
      axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
      .then(response => {
        console.log("ghjdhgjf");
        commit('addCoinsToStore', response.data.Data);
      })
      .catch(console.error);
    }
  },
  mutations: {
    addCoinsToStore(state, coins) {
      state.coins = coins;
      state.isFetching = false;
    },
    fetchingCoins(state){
      state.isFetching = true;
    }
  },
  getters: {
    convertCoinsObjToArray({ coins }){
      return coins ? Object.values(coins) : {};
    }
  }
}
