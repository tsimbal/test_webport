<template>
  <div>
    <ul class="post-list">
      <post-elem
        v-for="(post, index) of sliceByPerPage(currentPage)"
        :key="index"
        :post="post"
      ></post-elem>
    </ul>
    <pagination
      :current-page="currentPage"
      :pages="pages"
      :posts-length="list.length"
      @prevPage="sliceByPerPage(--currentPage)"
      @nextPage="sliceByPerPage(++currentPage)"
      @goToPage="pageToClick"
    ></pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    PostElem: () => import('@/components/PostElem.vue'),
    Pagination: () => import('@/components/Pagination.vue'),
  },
  data() {
    return {
      currentPage: 1,
      elPerPage: 10,
    }
  },
  computed: {
    ...mapGetters({ list: 'getList' }),
    pages() {
      return Math.ceil(this.list.length / this.elPerPage)
    },
  },
  methods: {
    pageToClick(page) {
      if (this.currentPage !== page) this.currentPage = page
    },
    sliceByPerPage(page) {
      return [...(this.list || [])].slice(
        (page - 1) * this.elPerPage,
        (page - 1) * this.elPerPage + this.elPerPage
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
