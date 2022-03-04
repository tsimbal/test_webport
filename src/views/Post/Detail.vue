<template>
  <div class="wrap">
    <loader v-if="loading"></loader>
    <div v-else class="wrap-detail">
      <div class="post-elem">
        <h3 class="title">{{ post.title }}</h3>
        <p class="user-name" @click="setModal(true)">
          <i>{{ user.name }}</i>
        </p>
        <p class="description">{{ post.body }}</p>
      </div>
      <h2>Comments</h2>
      <ul class="comment-list">
        <comments
          v-for="(comment, index) of comments"
          :key="index"
          :comment="comment"
        ></comments>
      </ul>
      <user-modal v-if="showModal" @close="setModal(false)"></user-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Comments: () => import('@/components/Comments.vue'),
    UserModal: () => import('@/components/UserModal.vue'),
    Loader: () => import('@/components/Loader.vue'),
  },
  data() {
    return {
      showModal: false,
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      post: 'getPost',
      user: 'getUser',
      comments: 'getComments',
    }),
  },
  async mounted() {
    this.loading = true
    const { id } = this.$route.params

    await this.$store.dispatch('getPostById', id)
    await this.$store.dispatch('getUserById', this.post.userId)
    await this.$store.dispatch('getCommentsForPost', id)

    this.loading = false
  },
  methods: {
    setModal(param) {
      this.showModal = param
    },
  },
}
</script>

<style lang="scss" scoped>
.comment-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    width: 90%;
  }
}
</style>
