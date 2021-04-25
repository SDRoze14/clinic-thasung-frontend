<template>
  <div class="h-screen flex flex-col bg-blue-400 leading-relaxed tracking-wide">
    <div class="pt-36 mt-20">
      <div
        class="max-w-screen-lg w-full mx-auto bg-white md:rounded-lg shadow-lg p-4"
      >
        <nuxt />
      </div>
    </div>

    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    ></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: { Loading },
  computed: {
    isLoading() {
      return this.$store.getters['loading/getLoading']
    },
  }
}
</script>

<style>
</style>