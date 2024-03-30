<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import type { PostResponse } from "./Blog.vue";

const route = useRoute();
const id = route.params.id;
const post = ref<PostResponse>();

onMounted(() => {
  (async () => {
    try {
      const rsp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      post.value = await rsp.json();
    } catch (error) {
      console.log("error:", error);
    }
  })();
});
//__________
</script>

<template>
  <div>
    <h1 class="title">{{ post?.title }}</h1>
    <div class="dtl">{{ post?.body }}</div>
  </div>
</template>

<style scoped>
.title {
  margin: 12px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.dtl {
  line-height: 1.5;
}
</style>
