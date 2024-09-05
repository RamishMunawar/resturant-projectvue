// src/router/index.js or src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'; // Use alias for imports if set up
import UserLogin from '@/components/UserLogin.vue'; // Use alias for imports if set up
import Login from '@/components/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/UserLogin',
        name: 'UserLogin',
        component: UserLogin,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
