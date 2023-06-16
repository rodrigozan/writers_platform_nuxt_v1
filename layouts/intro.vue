<template>
  <div>
    <header class="header">
      <nav class="text-center">
        <div class="container-fluid">
          <a href="#">Griots</a>
        </div>
      </nav>
    </header>
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';
  .header, .main {
    background-color: #562470;
  }
</style>

