<template>
  <div class="row">
    <div class="col-md-5 mx-auto">
      <div class="card mt-5">
        <h4 class="display-4 text-center text-primary">Sign Up</h4>
        <div class="card-body">
          <form action="" class="form">
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
              <button class="btn btn-sm btn-primary form-control">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup"
};
</script>
