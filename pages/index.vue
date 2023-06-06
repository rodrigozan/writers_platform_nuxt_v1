<template>
  <div class="container index">
  <figure class="loading-container" v-if="isLoading">
    <img class="img_book loading-image" src="/icon_book.png" alt="Icon Book by Griots" />
    </figure>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
layout: "intro",
data() {
    return {
      isLoading: true,
    };
  },
mounted() {
this.isLoading = false
      setTimeout(() => { return  this.$router.push('/select'), 5000 })
    },
})
</script>

<style lang="scss" scoped>
  .index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-image {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  }
</style>