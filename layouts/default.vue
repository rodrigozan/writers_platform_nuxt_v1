<template>
  <div>
    <Header />
    <main>
      <Sidebar />
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {  
    Header,
    Sidebar,
  },
  methods: {},
};
</script>
