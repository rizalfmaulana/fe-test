<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center bg-[#000000a6]"
    @click="$emit('close-modal')"
  >
    <div
      class="w-[500px] h-[500px] pt-20 mt-20 px-20 rounded-lg bg-white"
      @click.stop
    >
      <h3 class="text-4xl">Login</h3>
      <p class="mt-2">
        Don't have an account
        <span class="text-[#ED3237] cursor-pointer" @click="$emit('open-modal')"
          >Create Account</span
        >
      </p>
      <form class="mt-12" @submit.prevent="submit">
        <div class="mb-6">
          <label class="block mb-2 text-gray-700 text-base" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emaill"
            type="email"
            placeholder="Enter your Email"
            v-model="email"
            required
          />
        </div>
        <div class="mb-12">
          <label class="block text-gray-700 text-base" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="passwordd"
            type="password"
            placeholder="Enter your Password"
            v-model="password"
            required
          />
          <span></span>
        </div>
        <button type="sumbit" class="bg-[#ED3237] text-white py-3 px-4">
          Log in
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastification/composition";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    const toast = useToast();
  },
  methods: {
    ...mapActions({
      setToken: "auth/setToken",
    }),
    async submit() {
      try {
        let datas = {
          email: this.email,
          password: this.password,
        };
        const { data } = await axios.post(
          "https://restify-sahaware-boilerplate.herokuapp.com/api/auth/login",
          datas
        );
        this.$toast.success(data.message);
        this.setToken(data.content[0].token);
        this.$router.go();
        this.$emit("close-modal");
        this.email = "";
        this.password = "";
      } catch (error) {
        this.$toast.error(data.message);
      }
    },
  },
};
</script>
