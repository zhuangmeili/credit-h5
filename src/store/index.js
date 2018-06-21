import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//modules引入
import bookdetail from './modules/bookdetail';

export default new Vuex.Store({
  modules:{
    bookdetail
  }
})
