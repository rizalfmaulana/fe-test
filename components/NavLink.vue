<template>
  <li class="w-full pb-8 lg:pb-0">
    <a
      :href="url"
      class="focus:outline-none focus:shadow-outline transition-all ease-in-out duration-300 px-10 text-sm hover:text-[#ED3237]"
    >
      {{ name }}
    </a>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
