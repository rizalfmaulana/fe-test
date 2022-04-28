<template>
  <nav class="relative z-10 max-w-full lg:border-b lg:border-b-slate-200">
    <div
      class="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center py-5"
    >
      <div class="w-full flex items-center relative">
        <div
          class="w-full lg:w-auto flex items-center px-5 lg:px-0 justify-between"
        >
          <div>
            <img
              src="~/assets/img/logo.svg"
              alt="logo"
              class="hidden lg:block"
            />
            <img
              src="~/assets/img/logo-sm.png"
              alt="logo"
              class="block lg:hidden"
            />
          </div>
          <button
            class="rounded-lg lg:hidden focus:outline-none"
            @click="open = !open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              v-if="!open"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          :class="[
            open
              ? 'absolute top-10 left-0 h-screen bg-white flex flex-col'
              : 'hidden lg:flex',
          ]"
          class="w-full flex items-center lg:justify-between"
        >
          <ul :class="[open ? 'flex-col' : 'lg:flex']">
            <NavLink name="Home" url="/" />
            <NavLink name="Article" url="/article" />
            <NavLink name="Create" url="#" />
          </ul>
          <div
            :class="[open ? 'flex-col' : 'lg:flex']"
            class="text-blue-400 text-sm"
          >
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: false,
    };
  },
};
</script>
