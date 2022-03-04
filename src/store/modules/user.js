import { user } from '@/utils/axios'

export const userModule = {
  state: () => ({
    user: {},
  }),
  mutations: {
    SET_USER(state, data) {
      state.user = data
    },
  },
  actions: {
    async getUserById({ commit }, id) {
      try {
        const response = await user.getUserById(id)
        commit('SET_USER', response.data)

        return response
      } catch (e) {
        console.error(e)
      }
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
}
