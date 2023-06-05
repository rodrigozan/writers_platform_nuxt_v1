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
import Header from '~/components/Layout/Header.vue';
import Sidebar from '~/components/Layout/Sidebar.vue';
import Footer from '~/components/Layout/Footer.vue';

export default {
  components: {  
    Header,
    Sidebar,
  },
  methods: {},
};
</script>
