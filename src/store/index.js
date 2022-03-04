import Vue from 'vue'
import Vuex from 'vuex'
import { postModule } from './modules/post'
import { userModule } from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    postModule,
    userModule,
  },
})
