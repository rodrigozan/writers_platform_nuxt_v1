<template>
  <aside :class="['sidebar', { 'sidebar-collapsed': isCollapsed }]">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="/">Página Inicial</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contato</a>
      </li>
    </ul>
    <button @click="toggleSidebar" class="btn btn-primary btn-sm toggle-button">
      {{ isCollapsed ? "Expandir" : "Minimizar" }}
    </button>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  transition: width 0.3s ease;
}

.sidebar-collapsed {
  width: 80px;
}

.toggle-button {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
