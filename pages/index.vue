<template>
  <div>
    <div class="mt-0 lg:mt-20">
      <img
        src="~/assets/img/hero.png"
        class="hidden w-full lg:block"
        alt="hero"
      />
      <img
        src="~/assets/img/hero-sm.png"
        alt="hero"
        class="w-full block lg:hidden"
      />
    </div>
    <div class="mt-8 lg:mt-20">
      <h2 class="text-center text-4xl lg:text-5xl font-bold mb-8 lg:mb-12">
        Article
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 gap-0 lg:gap-4 px-4 lg:px-40"
      >
        <div class="text-center" v-if="$fetchState.pending">
          Loading fetching...
        </div>
        <div v-for="article in articles" :key="article.id">
          <Card :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    await this.getArticle();
  },
  methods: {
    async getArticle() {
      const data = await axios.get(
        "https://restify-sahaware-boilerplate.herokuapp.com/api/article"
      );
      this.articles = data.data.content.slice(4, 7);
      console.log(this.articles);
    },
  },
};
</script>
