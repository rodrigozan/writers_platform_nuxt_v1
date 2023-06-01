<template>
  <div :class="['sidebar', { 'sidebar-minimized': isMinimized }]">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="link in links" :key="link.id">
        <a class="nav-link" :href="link.url">{{ link.label }}</a>
      </li>
    </ul>
    <button class="btn btn-primary toggle-button" @click="toggleSidebar">
      Minimizar Sidebar
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMinimized: false,
      links: [
        { id: 1, label: 'Home', url: '/' },
        { id: 2, label: 'About', url: '/about' },
        { id: 3, label: 'Contact', url: '/contact' },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isMinimized = !this.isMinimized;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  /* Estilos adicionais para a sidebar */
}

.sidebar-minimized {
  width: 60px;
}

.toggle-button {
  margin: 10px;
}
</style>