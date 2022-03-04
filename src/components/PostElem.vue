<template>
  <li class="post-elem">
    <router-link :to="`/post/${post.id}`">
      <h3 class="title">{{ post.title }}</h3>
      <p class="description">{{ post.body }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
