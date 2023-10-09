import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        'path': '/',
        component: () => import('../views/Dashboard.vue'),
    },
    {
        'path': '/products',
        component: () => import('../views/ProductList.vue'),
    },
    {
        'path': '/product/:id',
        component: () => import('../views/ProductDetails.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router