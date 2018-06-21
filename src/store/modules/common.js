/**
 * @auther zhuang
 * @date 2018-6-21
 *   公共的
 * */
import * as types from '../types';

//state
const state = {
  // toast 组件 state默认值
  comToast: {
    isShow:false,
    mask:true,
    duration:2000,
    title:'加载中',
    icon:'loading'
  },
};
// getters
const getters = {
  comToast: state => state.comToast
};
// mutations
const mutations = {
  [types.COM_TOAST](state,setting){
    state = Object.assign(state,setting);
  }
};


export default {
  state,
  getters,
  mutations
}