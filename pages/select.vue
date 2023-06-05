<template>
    <div class="container select">
    <div class="content">
        <h2 class="mb-6">Escolha o que você quer criar hoje:</h2>
        <div class="d-grid gap-2 mb-4">
            <button v-for="t in task" class="btn btn-light fw-bolder" @click="selectTask(t)">{{ t }}</button>
        </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
layout: "intro",
props: {
  task_selected: ''
},
data() {
  return {
    task: ['Enredo','Personagem','Worldbuilding']
  };
},
methods: {
    selectTask(selected) {
      console.log(selected)
      this.$router.push({ name: 'planning', params: { task: selected } });
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