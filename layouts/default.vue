<template>
  <div class="relative">
    <Navbar @open-modal="showLogin = true" />
    <main class="max-w-screen-xl mx-auto">
      <Nuxt />
    </main>
    <Footer />
    <Register
      v-show="showRegis"
      @close-modal="showRegis = false"
      @open-modal="login"
    />
    <Login
      v-show="showLogin"
      @close-modal="showLogin = false"
      @open-modal="regis"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLogin: false,
      showRegis: false,
    };
  },
  methods: {
    regis() {
      this.showRegis = true;
      this.showLogin = false;
    },
    login() {
      this.showLogin = true;
      this.showRegis = false;
    },
  },
};
</script>
