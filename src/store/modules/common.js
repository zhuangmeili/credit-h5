/**
 * @auther zhuang
 * @date 2018-6-21
 *   公共的
 * */
import * as types from '../types';

//state
const state = {
  comModal:{
    isShow:false,
    isCancel:true,
    isConfirm:true,
    title:'提示',
    content:'这是一个模态弹窗'
  },
  // toast 组件 state默认值
  comToast: {
    isShow:false,
    mask:true,
    duration:3000,
    title:'加载中',
    icon:'loading'
  }

};
const actions={

};
// getters
const getters = {
  comModal: state => state.comModal,
  comToast: state => state.comToast,

};
// mutations 改变 state
const mutations = {
  [types.COM_MODAL](state,setting){
    Object.assign(state.comModal,setting);
  },
  [types.COM_TOAST](state,setting){
    Object.assign(state.comToast,setting);
  }
};


export default {
  state,
  actions,
  getters,
  mutations
}