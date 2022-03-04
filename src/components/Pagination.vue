<template>
  <div class="pagination-container">
    <ul v-if="postsLength > 10" class="pagination">
      <li class="pagination-elem">
        <button
          v-if="currentPage !== 1"
          class="pagination-elem-inner pagination-prev"
          @click="$emit('prevPage')"
        >
          <span class="text">Prev</span>
        </button>
      </li>
      <li
        v-for="(page, index) of countPage"
        :key="`pagination${index}}`"
        :class="{ active: currentPage === page }"
        class="pagination-elem"
      >
        <button
          class="pagination-elem-inner"
          :disabled="currentPage === page"
          @click="$emit('goToPage', page)"
        >
          <span>{{ page }}</span>
        </button>
      </li>
      <li class="pagination-elem">
        <button
          v-if="currentPage !== pages"
          class="pagination-elem-inner pagination-next"
          @click="$emit('nextPage')"
        >
          <span class="text">Next</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
      required: true,
    },
    pages: {
      type: Number,
      default: 1,
      required: true,
    },
    postsLength: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  computed: {
    countPage() {
      if (this.pages <= 4)
        return Array.from({ length: this.pages }, (val, index) => index + 1)
      if (this.currentPage < 3)
        return Array.from({ length: 3 }, (val, index) => index + 1)
      if (this.currentPage > this.pages - 2)
        return Array.from(
          { length: 3 },
          (val, index) => this.pages - 3 + (index + 1)
        )

      return [this.currentPage - 1, this.currentPage, this.currentPage + 1]
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
