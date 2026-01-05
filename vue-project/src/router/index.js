import { createRouter, createWebHistory } from 'vue-router'

import Portfolio from '../views/Portfolio.vue'
import Devoir1 from '../views/Devoir1.vue'
import Devoir2 from '../views/Devoir2.vue'
import Devoir3 from '../views/Devoir3.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    { path: '/', component: Portfolio },
    { path: '/devoir1', component: Devoir1 },
    { path: '/devoir2', component: Devoir2 },
    { path: '/devoir3', component: Devoir3 },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
