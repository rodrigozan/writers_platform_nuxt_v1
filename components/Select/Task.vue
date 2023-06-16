<template>
  <div>
    <h2 class="mb-6">Escolha o que você quer criar hoje:</h2>
    <div class="d-grid gap-2 mb-4">
      <button
        v-for="t in task"
        class="btn btn-secondary"
        @click="selectTask(t)"
      >
        {{ t }}
      </button>
    </div>
    <div class="mt-6">{{ result }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      task: ['Enredo', 'Personagem', 'Worldbuilding'],
      result: '',
    }
  },
  methods: {
    selectTask(selected) {
      this.result = `Perfeito! Iremos ajudar você na criação do ${selected}.`
      setTimeout(() => {
        this.$router.push({ name: 'planning', params: { task: selected } })
      }, 5000)
    },
  },
}
</script>
