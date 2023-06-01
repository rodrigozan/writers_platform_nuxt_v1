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
  head() {
    return {
      title: `Griots - ${this.title}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    };
  },
  mounted: {},
  computed: {},
  watch: {},
  methods: {
    title() {
      let default_route = this.$route.path
      for (let i in routes) {
        if (routes[i].sub) {
          if (this.$vuetify.breakpoint.width >= 600) {
            for (let z in routes[i].sub) {
              if (default_route.includes(routes[i].sub[z].to)) return this.$t(routes[i].title) + " - " + this.$t(routes[i].sub[z].title)
            }
          } else {
            for (let z in routes[i].sub) {
              if (default_route.includes(routes[i].sub[z].to)) return this.$t(routes[i].sub[z].title)
            }
          }
        }
        if (default_route.includes(routes[i].to)) return this.$t(routes[i].title)
      }
      return ""
    },
  },
};
</script>
