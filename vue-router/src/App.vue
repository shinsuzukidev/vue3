<script setup lang="ts">
import { reactive, provide } from "vue";
import { RouterView } from "vue-router";
import type { Member } from "@/interface";

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
  <header>
    <h1>router sample</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}

#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}

#breadcrumbs {
  margin-left: 0px;
}

#breadcrumbs ul {
  padding-left: 0px;
}

#breadcrumbs ul .current {
  color: red;
}

#breadcrumbs ul li:before {
  content: " > ";
}

#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>
