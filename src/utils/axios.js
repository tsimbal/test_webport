import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'
const baseConfig = axios.create({
  baseURL: BASE_URL,
  headers: { 'content-type': 'application/json' },
})

export const post = {
  async getAllPosts() {
    return await baseConfig.get('posts')
  },
  async getPostById(id) {
    return await baseConfig.get(`posts/${id}`)
  },
  async getCommentForPost(id) {
    return await baseConfig.get(`posts/${id}/comments`)
  },
}

export const user = {
  async getUserById(id) {
    return await baseConfig.get(`users/${id}`)
  },
}
