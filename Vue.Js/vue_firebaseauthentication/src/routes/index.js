import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginView.vue';
import Register from '../components/RegisterView.vue';
import Dashboard from '../components/DashboardView.vue';


const routes = [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router