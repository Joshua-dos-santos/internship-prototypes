<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h2 v-if="user.loggedIn" class="welcome-heading">
              Welcome, {{ user.data.email }}
            </h2>
            <h2 v-else class="dashboard-heading">Dashboard</h2>
          </div>
          <div class="card-body">
            <div v-if="user.loggedIn" class="alert alert-success" role="alert">
              <p>You are logged in!</p>
              <button @click.prevent="signOut" class="btn btn-primary">
                Log Out
              </button>
            </div>
            <div v-else class="alert alert-danger" role="alert">
              <p>
                You are not logged in! Please log in to access the dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from "../firebaseConfig";

export default {
  name: "DashboardComponent",

  setup() {
    const store = useStore();
    const router = useRouter();

    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return store.getters.user;
    });

    const signOut = async () => {
      await store.dispatch("logOut");
      router.push("/");
    };

    return { user, signOut };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 100%;
  max-width: 400px;
  border: 1px solid #ced4da;
  border-radius: 8px;
}

.card-header {
  background-color: #007bff;
  color: #fff;
  padding: 1.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  padding: 1.5rem;
}

.welcome-heading,
.dashboard-heading {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.alert {
  margin-top: 1rem;
}

.alert p {
  margin-bottom: 0;
}

.btn-primary {
  margin-top: 1rem;
  width: 100%;
}
</style>
