<template>
  <li class="post-elem">
    <h3>{{ comment.name }}</h3>
    <p>
      Email:
      <b>
        <i>{{ comment.email }}</i>
      </b>
    </p>
    <p>{{ comment.body }}</p>
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
