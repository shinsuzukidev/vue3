<script setup lang="ts">
import { useRouter } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
//import MainTodo from "@/components/MainToto.vue";
import TheFooter from "@/components/TheFooter.vue";

const router = useRouter();
const goBlog = () => {
  router.push("./blog");
};
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <!-- <MainTodo /> -->
    <nav>
      <router-link to="/">Todo</router-link>
      | <router-link to="/about">About</router-link> | <router-link to="/blog">Blog</router-link> |
      <router-link to="/store">Store</router-link>
      <!-- | <span @click="goBlog">Blog</span>
      |<router-link to="/blog/1">blog1</router-link>
      |<router-link to="/blog/2">blog2</router-link> -->
    </nav>

    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
}

.main {
  flex: 1;
  padding: 16px;
}
</style>
