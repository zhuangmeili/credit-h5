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
    duration:3000,
    title:'加载中',
    icon:'loading'
  },
};
const actions={

};
// getters
const getters = {
  comToast: state => state.comToast
};
// mutations
const mutations = {
  [types.COM_TOAST](state,setting){
    // 改变 state
    Object.assign(state.comToast,setting);
  }
};


export default {
  state,
  actions,
  getters,
  mutations
}