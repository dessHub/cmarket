import axios from 'axios';

export default {
  namespaced: true,
  state: {
    isFetching: false,
    success: false,
    errorMessage: null,
    toplist: null,
  },
  actions: {
    getToplist({ commit }) {
     commit('fetchingToplist');
     axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD')
     .then(response => {
       commit('addToplistToStore', response.data.Data);
     })
     .catch(error => commit('fetchingToplistFailed', error));
    },
  },
  mutations: {
    addToplistToStore(state, toplist) {
      state.toplist =  toplist;
      state.isFetching = false;
      state. success = true;
    },
    fetchingToplist(state) {
      state.isFetching = true;
    },
    fetchingToplistFailedt(state, error) {
      state.isFetching = false;
      state.success = false;
      state.errorMessage = error;
    },
  },
  getters: {
    getToplist(state){
      return state.toplist;
    },
  },
}
