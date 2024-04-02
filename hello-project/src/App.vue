<script setup lang="ts">
import OneSection from "@/components/OneSection.vue";
</script>

<template>
  <h2>slotの利用</h2>
  <section>
    <OneSection name="sato">
      <p>連絡済み</p>
    </OneSection>
    <OneSection name="nakamura" />
  </section>
</template>

<style scoped></style>
