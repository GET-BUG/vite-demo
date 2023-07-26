import { createRouter ,createWebHistory} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ()=> import('../views/home/index.vue')
        },
        {
            path: '/my',
            component:()=> import('../views/my/index.vue')
        }
    ]
})