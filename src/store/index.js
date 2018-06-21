import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//modules引入
import common from './modules/common';
import bookdetail from './modules/bookdetail';

export default new Vuex.Store({
  modules:{
    common,
    bookdetail
  }
})
