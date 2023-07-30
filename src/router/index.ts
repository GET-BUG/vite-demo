import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/text",
      component: () => import("../views/text/index.vue"),
    },
  ],
});
