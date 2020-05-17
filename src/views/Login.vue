<template>
  <div class="row">
    <div class="col-md-5 mx-auto">
      <div class="card mt-5">
        <h4 class="display-4 text-center text-primary">Login</h4>
        <div class="card-body">
          <form @submit.prevent="submitForm" class="form">
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
              <button type="submit" :disabled="getAuthLoader" class="btn btn-sm btn-primary form-control">
                <i class="fas fa-spinner fa-spin text-white" v-if="getAuthLoader"></i>
                <span class="text-white" v-else>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters ,mapActions } from 'vuex'

export default {
  name: "Login",
  
  data(){
    return{
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isUserAuth', 'getAuthErrors', 'getAuthLoader'])
  },
  methods: {
    ...mapActions(['loginUser']),
    submitForm(){
      this.loginUser({email: this.email, password: this.password});
    }
  },
  watch: {
    isUserAuth(){
      this.$router.push('/');
    }
  }
};
</script>
