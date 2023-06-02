<template>
    <div class="container select">
    <div class="content">
        <h2 class="mb-6">Escolha o que você quer criar hoje:</h2>
        <div class="d-grid gap-2 mb-4">
            <button v-for="task in tasks" class="btn btn-light fw-bolder" @click="selectTask(task.route)">{{ task.label }}</button>
        </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
layout: "intro",
data() {
  return {
    tasks: [
      { label: 'Enredo', route: '' },
      { label: 'Personagem', route: 'personagem' },
      { label: 'Mundo', route: 'mundo' }
    ]
  };
},
methods: {
    selectTask(route) {
        this.$router.push(`/${route}`);
    }
},
})
</script>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .select{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  }
</style>