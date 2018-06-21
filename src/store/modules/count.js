/**
 * @auther zhuang
 * @date 2018-6-20
 *
 *
 * */
import types from '../types';

console.log(types);
//local types
const locals = {
  GET_LIST: 'GET_LIST',

};


const state = {
  buyList: []
};

// actions
//this.$store.dispatch('getBuyList', params);
const actions = {
  getBuyList({commit, state}, params) {
    console.log(params, state, commit);
    this.$http.get('', {}).then(res => {
      // 更改 state只能在 mutation 中
      commit(locals.GET_LIST, res);
    }).catch(err => {

    });
  }
};
// getters
const getters = {
  buyList: state => state.buyList

};

// mutations-更改 state
const mutations = {
  [locals.GET_LIST](state,res){
    state.buyList = res.data || [];
  }
};


export default {
  state,
  actions,
  getters,
  mutations,

}