<template>
  <div>
    <Header />
    <main>
      <sidebar></sidebar>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layout/Header.vue';
import Sidebar from '~/components/layout/Sidebar.vue';
import Footer from '~/components/layout/Footer.vue';

export default {
  components: {  
    Header,
    Sidebar,
  },
  methods: {},
};
</script>
