<script setup lang="ts">
import { ref } from "vue";

const name = ref("nanasi");
</script>

<template>
  <section>
    <p>{{ name }} san!</p>
    <input type="text" v-model="name" />
  </section>
</template>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>
