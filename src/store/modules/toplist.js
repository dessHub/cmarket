import api from '../../utils/api';

export default {
  namespaced: true,
  state: {
    isFetching: false,
    success: false,
    errorMessage: null,
    toplist: null,
  },
  actions: {
    async getToplist({ commit }) {
     commit('fetchingToplist');
     const data = await api.get('data/top/mktcapfull?limit=100&tsym=USD')
     data.Message === 'Success' ? 
       commit('addToplistToStore', data.Data) :
       commit('fetchingToplistFailed', data.Message);
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
    fetchingToplistFailed(state, error) {
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
