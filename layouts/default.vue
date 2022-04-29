<template>
  <div class="relative">
    <Navbar @open-modal="showModal = true" />
    <main class="max-w-screen-xl mx-auto">
      <Nuxt />
    </main>
    <Footer />
    <Register v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: true,
    };
  },
};
</script>
