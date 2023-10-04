import { createRouter, createWebHashHistory } from "vue-router";
import login from '../components/login.vue';
import compras from '../components/compras.vue';
import ventas from '../components/ventas.vue';

const routes = [
    { path: '/', component: login },
    { path: '/compras', component: compras },
    { path: '/ventas', component: ventas }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});
