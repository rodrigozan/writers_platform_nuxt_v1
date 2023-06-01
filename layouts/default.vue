<template>
  <div class="layout container-fluid">
    <Header />
    <main class="main">
      <Sidebar />
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  /* Estilos adicionais para o layout padrão */
}

.main {
  display: flex;
  flex-direction: row;
  /* Estilos adicionais para o conteúdo principal */
}
</style>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>
