<template>
  <div class="w-full mt-6 lg:mt-0">
    <img
      :src="article.image"
      class="h-[205px] w-full object-cover"
      :alt="article.title"
    />
    <h5 class="text-2xl font-medium mt-4">{{ article.title }}</h5>
    <p class="text-base font-light mt-2">{{ article.short_description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
