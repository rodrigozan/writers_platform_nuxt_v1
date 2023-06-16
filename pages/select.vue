<template>
  <div class="container-fluid select">
    <div>
    <div class="container text-center">
      <h1 class="mb-6">Bem-vindo ao Griots:</h1>
      <h3>Diga-me como podemos ajudá-lo</h3>
    </div>
     <guide></guide>
      <task></task>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'intro',
  data() {
    return {
      task: ['Enredo', 'Personagem', 'Worldbuilding'],
    }
  },
  methods: {},
})
</script>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
.select {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
}
</style>
