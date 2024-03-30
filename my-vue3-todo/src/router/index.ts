﻿import { createRouter, createWebHistory } from "vue-router";

import MainTodo from "@/views/MainToto.vue";
import About from "@/views/About.vue";
import NotFount from "@/views/NotFound.vue";
import Blog from "@/views/Blog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "top",
      component: MainTodo
    },
    {
      path: "/mainTodo",
      name: "mainTodo",
      component: MainTodo
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFount
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/blog/:id",
      name: "blogid",
      component: Blog
    }
  ]
});

export default router;
