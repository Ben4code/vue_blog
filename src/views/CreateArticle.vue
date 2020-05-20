<template>
  <div class="row my-5">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <h4 class="card-header bg-primary text-white">Create New Article</h4>
        <div class="card-body">
          <form @submit.prevent="submitArticle" class="form">
            <img width="400" height="400" :src="imageSrc" class="my-3"/>
            <label >*Select an image thumbnail</label><br>
            <div class="input-group">  
              <input
                accept="image/*" 
                type="file"
                @change="handleImg"
              />
            </div>
            <div class="form-group mt-5">
              <label >*Select Category</label>
              <select v-model="category_id" class="form-control">
                <option v-for="category in getStateCategories" :key="category.id" :value="category.id">
                  {{category.name}}
                </option>
              </select>
            </div>
            <div class="form-group mt-5">
              <label for="">*Title</label>
              <input v-model="title" type="text" placeholder="Enter Title" class="form-control" />
            </div>
            <div class="form-group">
              <label >*Content</label>
              <wysiwyg v-model="content" />
            </div>
            <div class="form-group">
              <button type="submit" :disabled="getAuthLoader" class="btn btn-sm btn-primary form-control">
                <i class="fas fa-spinner fa-spin text-white" v-if="getAuthLoader"></i>
                <span class="text-white" v-else>Create Article</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CareateArticle",
  components: {},
  data() {
    return {
      title: "",
      content: "",
      imageSrc: null,
      file: null,
      category_id: null
    };
  },
  computed:{
    ...mapGetters(["getStateCategories", "getNotification", "getAuthLoader"])
  },
  methods: {
    ...mapActions(["createArticle", "getCategories"]),
    handleImg(event) {
      const src = URL.createObjectURL(event.target.files[0]);
      this.imageSrc = src;
      this.file = event.target.files[0];
    },
    submitArticle(){
      const formFields = {
        title: this.title,
        content: this.content,
        category_id: this.category_id,
        image: this.file
      }
      this.createArticle(formFields);
    }
  },
  mounted(){
    this.getCategories();
  },
  watch:{
    getNotification(){
      if(this.getNotification === 200){
        this.$noty.success("Article created successfully")
        this.$router.push('/');
      }else{
        this.$noty.error("An error occured.")
      }
    }
  }
};
</script>

<style>
</style>