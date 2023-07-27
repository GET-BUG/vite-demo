import { createRouter ,createWebHistory} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: ()=> import('../views/home/index.vue')
        },
        {
            path: '/',
            component:()=> import('../views/my/index.vue')
        }
    ]
})