<script setup lang="ts">
import { computed, inject } from "vue";
import type { Member } from "../interfaces";

interface Props {
  id: number;
}
const props = defineProps<Props>();

const memberList = inject("memberList") as Map<number, Member>;

const member = computed((): Member => {
  return memberList.get(props.id) as Member;
});

const localNote = computed((): string => {
  let localNote = member.value.note;
  if (localNote == undefined) {
    localNote = "--";
  }
  return localNote;
});
</script>

<template>
  <section class="box">
    <h4>{{ member.name }} info</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>mail</dt>
      <dd>{{ member.email }}</dd>
      <dt>points</dt>
      <dd>
        <input type="number" v-bind:number="member.points" />
      </dd>
      <dt>note</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: green 1px dashed;
  margin: 10px;
}
</style>
