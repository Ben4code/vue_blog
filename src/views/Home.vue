<template>
  <div>
    <div class="jumbotron mt-3">
      <h1 class="display-4">Vuejs Blog</h1>
      <p
        class="lead"
      >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  
    <div class="mx-auto my-4 text-center" v-if="getAuthLoader">
      <i class="fas fa-spinner fa-spin fa-5x text-primary"></i>
    </div>
    <div v-else class="row">
      <div  class="col-md-4 mb-3" v-for="article in getStateArticles" :key="article.id">
        <Articles :article="article" />
      </div>
    </div>
    <div class="d-flex justify-content-between mb-5">
      <button @click="getArticles(getArticlesMeta.prev_page_url)" :disabled="getArticlesMeta.prev_page_url ===  null" class="btn btn-info">Prev Page</button>
      <button @click="getArticles(getArticlesMeta.next_page_url)" :disabled="getArticlesMeta.next_page_url ===  null" class="btn btn-info">Next Page</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Articles from "@/components/Articles";

export default {
  name: "Home",
  components: {
    Articles
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getStateArticles", "getArticlesMeta", "getAuthLoader"])
  },
  mounted() {
    this.getArticles("https://react-blog-api.bahdcasts.com/api/articles");
  },
  methods: {
    ...mapActions(["getArticles"])
  }
};
</script>

<style>
</style>