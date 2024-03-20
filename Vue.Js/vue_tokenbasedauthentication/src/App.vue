<template>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <div class="nav-right">
      <router-link v-if="!isLoggedIn" to="/login" class="login-link"
        >Login</router-link
      >
      <span v-if="isLoggedIn" class="welcome-message"
        >Welcome, {{ user.name }}</span
      >
    </div>
  </nav>
  <router-view />
</template>

<script>
// Import necessary modules
import { mapGetters } from "vuex";

// Define the component
export default {
  // Map getters to computed properties
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn", // Specify the type explicitly
      user: "user", // Specify the type explicitly
    }),
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa; /* Light gray */
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 20px;
}

.nav-link:hover {
  color: #42b983; /* Green */
}

.nav-right {
  display: flex;
  align-items: center;
}

.login-link {
  font-weight: bold;
  color: #007bff; /* Blue */
  text-decoration: none;
  margin-right: 20px;
}

.welcome-message {
  font-weight: bold;
}
</style>
