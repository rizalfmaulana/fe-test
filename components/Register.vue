<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center bg-[#000000a6]"
    @click="$emit('close-modal')"
  >
    <div
      class="w-[500px] h-[auto] pt-20 mt-20 px-20 rounded-lg bg-white"
      @click.stop
    >
      <h3 class="text-4xl">Create Account</h3>
      <p class="mt-2">
        Have an account
        <span class="text-[#ED3237] cursor-pointer" @click="$emit('open-modal')"
          >Login</span
        >
      </p>
      <form class="mt-12" @submit.prevent="submit">
        <div class="mb-6">
          <label class="block mb-2 text-gray-700 text-base" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your Name"
            v-model="name"
            required
          />
          <span class="text-red-600 text-sm" v-if="error.name">{{
            error.name
          }}</span>
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-gray-700 text-base" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
            placeholder="Enter your Email"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-gray-700 text-base" for="phone">
            Phone Number
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Enter your Phone Number"
            pattern="^08[0-9]*$"
            v-model="phone"
            required
          />
          <span class="text-red-600 text-sm" v-if="error.phone">{{
            error.phone
          }}</span>
        </div>
        <div class="mb-12">
          <label class="block text-gray-700 text-base" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your Password"
            v-model="password"
            required
          />
        </div>
        <button type="submit" class="bg-[#ED3237] text-white py-3 px-4">
          Create Account
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastification/composition";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      error: {
        name: "",
        phone: "",
      },
    };
  },
  setup() {
    const toast = useToast();
  },
  methods: {
    async submit() {
      this.error.name = "";
      this.error.phone = "";
      if (this.name.length < 3) {
        this.error.name = "minimum 3 character";
      } else if (this.phone.length < 10) {
        this.error.phone = "minimum 10 digit and start with 08xxx";
      } else {
        try {
          let datas = {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
          };
          const { data } = await axios.post(
            "https://restify-sahaware-boilerplate.herokuapp.com/api/auth/register",
            datas
          );
          this.$toast.success(data.message);
          this.$emit("close-modal");
          this.name = "";
          this.email = "";
          this.password = "";
          this.phone = "";
          this.error.name = "";
          this.error.phone = "";
        } catch (error) {
          this.$toast.error("error");
        }
      }
      // console.log(error.response.data.message.details[0].message);
      // console.log(error.response.data.message);
    },
  },
};
</script>
