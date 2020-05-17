<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <router-link class="nav-link" to="/">
      <img class="navbar-brand" src="@/assets/logo.png" width="30" height="40" alt="Blog Logo">
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li v-if="!isUserAuth" class="nav-item">
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
        
        <li v-if="!isUserAuth" class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li v-if="isUserAuth" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Hello {{ getAuthUser.user.name.split(' ')[0] }}</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/login">Logout</router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(['isUserAuth', 'getAuthUser'])
  }
};
</script>

<style>
</style>