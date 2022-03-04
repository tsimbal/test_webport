<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Post</router-link>
    </nav>
    <div class="container">
      <loader v-if="loading"></loader>
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    Loader: () => import('@/components/Loader.vue'),
  },
  data() {
    return {
      loading: false,
    }
  },
  async mounted() {
    this.loading = true

    await this.$store.dispatch('getPostList')

    this.loading = false
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/main.scss';
</style>
