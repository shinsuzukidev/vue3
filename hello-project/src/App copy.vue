<script setup lang="ts">
import { reactive, provide } from "vue";
import BaseSection from "./components/BaseSection.vue";
import type { Member } from "./interfaces";

const memberList = new Map<number, Member>();

memberList.set(1, {
  id: 1,
  name: "sato",
  email: "sato@xxx.co.jp",
  points: 35,
  note: "初回特典あり"
});

memberList.set(2, {
  id: 2,
  name: "sena",
  email: "seba@xxx.co.jp",
  points: 30
});

provide("memberList", reactive(memberList));
</script>

<template>
  <BaseSection />
</template>

<style scoped></style>
