import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//modules引入
import count from './modules/count';

export default new Vuex.Store({
  modules:{
    count
  }
})
