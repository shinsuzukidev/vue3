<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

export type PostResponse = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const posts = ref<PostResponse[]>([]);

onMounted(() => {
  (async () => {
    try {
      const rsp = await fetch("https://jsonplaceholder.typicode.com/posts");
      posts.value = await rsp.json();
    } catch (error) {
      console.log("error:", error);
    }
  })();
});
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.id }}
      <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  margin-top: 12px;
}

li {
  padding: 8px;
  margin-bottom: 8px;
  list-style: none;
  border: 1px solid #ccc;
}

li:hover {
  background-color: #555;
}

a {
  color: #333;
  list-style: none;
}
</style>
