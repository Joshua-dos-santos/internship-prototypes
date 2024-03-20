<template>
  <div class="login-container">
    <h1 class="login-heading">Login</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="username" placeholder="Username" class="login-input" />
      <br /><br />
      <input
        v-model="password"
        placeholder="Password"
        type="password"
        class="login-input"
      />
      <br /><br />
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      const { user, token } = await response.json();
      this.setUser(user);
      this.setToken(token);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.login-heading {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
