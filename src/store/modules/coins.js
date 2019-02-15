import api from '../../utils/api';

export default {
  namespaced: true,
  state: {
    coins: null,
    isFetching: false,
    success: false,
    errorMessage: null
  },
  actions: {
    async getCoins({ commit }) {
      commit('fetchingCoins');
      let data = await api.get('data/all/coinlist');
      data.Response === 'Success' ? 
        commit('addCoinsToStore', data.Data) : 
        commit('fetchingCoinsFail', data.Message);
    },

  },
  mutations: {
    addCoinsToStore(state, coins) {
      state.coins = coins;
      state.isFetching = false;
    },
    fetchingCoins(state){
      state.isFetching = true;
    },
    fetchingCoinsFail(state, error){
      state.isFetching = false;
      state.success = false;
      state.errorMessage = error;
    }
  },
  getters: {
    convertCoinsObjToArray({ coins }){
      return coins ? Object.values(coins) : {};
    }
  }
}
