import { post } from '@/utils/axios'

export const postModule = {
  state: () => ({
    postList: [],
    post: {},
    comments: [],
  }),
  mutations: {
    SET_POST_LIST(state, data) {
      state.postList = data
    },
    SET_POST(state, data) {
      state.post = data
    },
    SET_COMMENTS_POST(state, data) {
      state.comments = data
    },
  },
  actions: {
    async getPostList({ commit }) {
      try {
        const response = await post.getAllPosts()
        commit('SET_POST_LIST', response.data)

        return response
      } catch (e) {
        console.error(e)
      }
    },
    async getPostById({ commit }, id) {
      try {
        const response = await post.getPostById(id)
        commit('SET_POST', response.data)

        return response
      } catch (e) {
        console.error(e)
      }
    },
    async getCommentsForPost({ commit }, id) {
      try {
        const response = await post.getCommentForPost(id)
        commit('SET_COMMENTS_POST', response.data)

        return response
      } catch (e) {
        console.error(e)
      }
    },
  },
  getters: {
    getList: (state) => state.postList,
    getPost: (state) => state.post,
    getComments: (state) => state.comments,
  },
}
