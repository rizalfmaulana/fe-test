<template>
  <div>
    <div class="mt-0 lg:mt-20">
      <div class="text-center" v-if="$fetchState.pending">
        Loading fetching...
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 gap-0 lg:gap-4 px-4 lg:px-40"
      >
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
  name: "ArticlePage",
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
      this.articles = data.data.content;
    },
  },
};
</script>
