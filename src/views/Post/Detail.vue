<template>
  <div>
    <div class="post-elem">
      <h3 class="title">{{ post.title }}</h3>
      <p class="user-name" @click="showModal = true">
        <i>{{ user.email }}</i>
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
    <user-modal v-if="showModal" @close="showModal = false"></user-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Comments: () => import('@/components/Comments.vue'),
    UserModal: () => import('@/components/UserModal.vue'),
  },
  data() {
    return {
      showModal: false,
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
    const { id } = this.$route.params

    await this.$store.dispatch('getPostById', id)
    await this.$store.dispatch('getUserById', this.post.userId)
    await this.$store.dispatch('getCommentsForPost', id)
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
.post-elem {
  text-align: left;
  border: 1px solid #000;
  margin: 5px;
  padding: 5px 10px;

  a {
    color: #000;
    text-decoration: none;
  }
}
</style>
