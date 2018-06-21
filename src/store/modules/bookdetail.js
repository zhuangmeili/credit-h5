/**
 * @auther zhuang
 * @date 2018-6-20
 *
 *
 * */
import * as types from '../types';
import http from '../../utils/http'
//local types
const locals = {
  SET_DETAIL: 'SET_DETAIL',
};

//state
const state = {
  bookMsg: {}
};


// actions
const actions = {
  // getDetail({commit, state},payload){}
  getDetail({commit}) {
    commit(types.COM_TOAST,{isShow:true});
    http.get({
      url:'/v2/book/1220562'
    }).then(res=>{
      commit(types.COM_TOAST,{isShow:false});
      commit(locals.SET_DETAIL,res);
    })
  }
};

// getters
const getters = {
  bookMsg: state => state.bookMsg
};

// mutations
const mutations = {
  [locals.SET_DETAIL](state,res){
    state.bookMsg = res;
  }
};


export default {
  state,
  actions,
  getters,
  mutations
}