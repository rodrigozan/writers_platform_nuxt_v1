<template>
  <header>
    <!-- Conteúdo do header -->
    <button class="btn btn-primary" @click="toggleSidebar">Minimizar Sidebar</button>
  </header>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      // Emita um evento personalizado para o componente Sidebar controlar a minimização
      this.$emit('toggle-sidebar');
    },
  },
};
</script>
