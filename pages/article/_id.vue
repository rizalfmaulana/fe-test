<template>
  <div class="mt-0 lg:mt-20">
    <div class="max-w-full lg:max-w-screen-md mx-auto px-4 lg:px-0">
      <div class="text-center" v-if="$fetchState.pending">
        Loading details...
      </div>
      <h1 class="text-2xl lg:text-4xl font-medium">{{ article.title }}</h1>
      <p class="text-lg lg:text-2xl font-light my-6 lg:my-10">
        {{ article.short_description }}
      </p>
      <img :src="article.image" class="w-full" :alt="article.title" />
      <p class="text-lg lg:text-2xl mt-6 lg:mt-10">{{ article.description }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      article: {},
    };
  },
  async fetch() {
    const response = await axios.get(
      `https://restify-sahaware-boilerplate.herokuapp.com/api/article/${this.$route.params.id}`
    );
    console.log(response);
    this.article = response.data.content;
  },
};
</script>
