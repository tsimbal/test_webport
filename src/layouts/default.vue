<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Post</router-link>
    </nav>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  async mounted() {
    await this.$store.dispatch('getPostList')
  },
}
</script>
