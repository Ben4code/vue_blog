<template>
  <div class="my-5">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <div class="card">
          <img class="img-fluid rounded" :src="article.imageUrl" :alt="article.title" />
          <div class="card-body">
            <h1 class="text-center card-title">{{article.title}}</h1>
            <div class="article-content" v-html="article.content"></div>
          </div>
          <div class="comments my-4 px-3">
            <vue-disqus
              shortname="vuejs-blog-2"
              :identifier="article.slug"
              :url="url"
            ></vue-disqus>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Article",
  data() {
    return {
      article: {},
      url: window.location.href
    };
  },
  computed: {
    ...mapGetters(["getStateArticles"])
  },
  methods: {
    filterArticle(articles, id) {
      return articles.filter(item => {
        return item.id === +id;
      });
    }
  },
  mounted() {
    const articleKey = localStorage.getItem("articles");
    if (!articleKey) {
      this.article = this.filterArticle(
        this.getStateArticles,
        this.$route.params.id
      )[0];
    } else {
      this.article = this.filterArticle(
        JSON.parse(articleKey),
        this.$route.params.id
      )[0];
    }
  }
};
</script>

<style>
</style>