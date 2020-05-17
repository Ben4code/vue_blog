<template>
  <div class="row">
    <div class="col-md-5 mx-auto">
      <div class="card mt-5">
        <h4 class="display-4 text-center text-primary">Sign Up</h4>
        <div class="card-body">
          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <input type="text" placeholder="Enter name" v-model="name" class="form-control">
              <div class="errors" v-if="getAuthErrors.name">
                <small class="text-danger" v-for="error in getAuthErrors.name" :key="error">{{error}}</small>
              </div>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Enter email" v-model="email" class="form-control">
              <div class="errors" v-if="getAuthErrors.email">
                <small class="text-danger" v-for="error in getAuthErrors.email" :key="error">{{error}}</small>
              </div>
            </div>
            <div class="form-group">
              <input type="password" v-model="password" placeholder="Enter password" class="form-control">
              <div class="errors" v-if="getAuthErrors.password">
                <small class="text-danger" v-for="error in getAuthErrors.password" :key="error">{{error}}</small>
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-sm btn-primary form-control">
                <i class="fas fa-spinner fa-spin text-white" v-if="getAuthLoader"></i>
                <span class="text-white" v-else>Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Signup",
  
  data(){
    return{
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isUserAuth', 'getAuthErrors', 'getAuthLoader'])
  },
  methods: {
    ...mapActions(['registerUser']),
    submitForm(){
      this.registerUser({name: this.name, email: this.email, password: this.password});
    }
  },
  watch: {
    getAuthErrors(){
      Object.values(this.getAuthErrors).length > 0 ? this.$noty.error("Oppss something went wrong.") : null;
    },
    isUserAuth(){
      this.isUserAuth ? this.$noty.success("Registered in successfully") : null;
      this.$router.push('/');
    }
  }
};
</script>
