<template>
  <div class="card">
    <div class="card-header">
      <img class="img-fluid rounded" :src="article.imageUrl" alt="article.title">
    </div>
    <div class="card-body">
      <h4 class="card-title">{{article.title}}</h4>
      <span>{{article.created_at}}</span>
      <p class="card-text" v-html="article.content.substring(0,200)"></p>
      <router-link :to="`/article/${article.id}`" class="btn btn-sm btn-primary form-control">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: ["article"]
};
</script>

<style>
</style>