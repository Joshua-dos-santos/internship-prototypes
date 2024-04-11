<template>
  <div class="container">
    <div v-if="isLoggedIn" class="welcome">
      Welcome, <span class="username">{{ user.name }}</span>
    </div>
    <router-link v-if="!isLoggedIn" to="/login">
      <button class="login-button">Login</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn", "user"]),
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.welcome {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.username {
  color: #007bff; /* Blue color */
}

.login-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff; /* Blue color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3; /* Darker blue color */
}
</style>
