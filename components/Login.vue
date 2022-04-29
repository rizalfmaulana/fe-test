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
        Don't have an account <span class="text-[#ED3237]">Create Account</span>
      </p>
      <form class="mt-12">
        <div class="mb-6">
          <label class="block mb-2 text-gray-700 text-base" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your Email"
          />
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
          />
        </div>
        <button class="bg-[#ED3237] text-white py-3 px-4">Log in</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
