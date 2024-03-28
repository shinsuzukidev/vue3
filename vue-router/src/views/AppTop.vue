<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>TOP</h1>
  <section>
    <p>
      <RouterLink v-bind:to="{ name: 'MemberList' }"> 会員管理はこちら </RouterLink>
    </p>
  </section>
</template>
