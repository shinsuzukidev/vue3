<script setup lang="ts">
import { inject, reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import type { Member } from "@/interfaces";

const memberList = inject("memberList") as Map<number, Member>;
const member: Member = reactive({
  id: 0,
  name: "",
  email: "",
  points: 0,
  note: ""
});
const onAdd = () => {
  console.log(member);
  memberList.set(member.id, member);
  router.push({ name: "MemberList" });
};
const router = useRouter();
</script>

<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">Top</RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{ name: 'MemberList' }">会員リスト</RouterLink>
      </li>
      <li>会員情報追加</li>
    </ul>
  </nav>
  <section>
    <h2>会員情報追加</h2>
    <p>登録情報ボタンをクリックしてください</p>
    <form v-on:submit.prevent="onAdd">
      <dt>
        <label for="addId">id</label>
      </dt>
      <dd>
        <input type="number" id="addId" v-model.number="member.id" required />
      </dd>
      <dt>
        <label for="addName">name</label>
      </dt>
      <dd>
        <input type="text" id="addName" v-model="member.name" required />
      </dd>
      <dt>
        <label for="addMail">mail</label>
      </dt>
      <dd>
        <input type="text" id="addMail" v-model="member.mail" required />
      </dd>
      <dt>
        <label for="addPoints">points</label>
      </dt>
      <dd>
        <input type="number" id="addPoints" v-model.number="member.points" required />
      </dd>
      <dt>
        <label for="addNote">note</label>
      </dt>
      <dd>
        <textarea id="addNote" v-model="member.note"></textarea>
      </dd>
      <button type="submit">登録</button>
    </form>
  </section>
</template>
