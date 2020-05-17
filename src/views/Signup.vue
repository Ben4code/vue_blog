<template>
  <div class="row">
    <div class="col-md-5 mx-auto">
      <div class="card mt-5">
        <h4 class="display-4 text-center text-primary">Sign Up</h4>
        <div class="card-body">
          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <input type="text" placeholder="Enter name" v-model="name" class="form-control">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Enter email" v-model="email" class="form-control">
            </div>
            <div class="form-group">
              <input type="password" v-model="password" placeholder="Enter password" class="form-control">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-sm btn-primary form-control">Sign Up</button>
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
  name: "Signup",
  
  data(){
    return{
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isUserAuth'])
  },
  methods: {
    ...mapActions(['registerUser']),
    submitForm(){
      this.registerUser({name: this.name, email: this.email, password: this.password});
    }
  },
  watch: {
    isUserAuth(){
      this.$router.push('/');
    }
  }
};
</script>
