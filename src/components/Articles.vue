<template>
  <div class="card">
    <div class="card-header">
      <img class="img-fluid rounded" :src="article.imageUrl" alt="article.title">
    </div>
    <div class="card-body">
      <h4 class="card-title">{{article.title}}</h4>
      <span>{{article.created_at}}</span>
      <p class="card-text" v-html="article.content.substring(0,200)"></p>
      <button class="btn btn-sm btn-primary form-control">Read More</button>
    </div>
  </div>
</template>

<script>
// console.log(article)
export default {
  name: "Articles",
  props: ["article"],
  mounted() {
    console.log(this.article);
  }
};
</script>

<style>
</style>