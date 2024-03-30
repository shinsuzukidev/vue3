<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useCounter2Store } from "@/stores/counter2";
const counter = useCounterStore();
const counter2 = useCounter2Store();

const addState = () => {
  counter.count++;
};

const addMethod = () => {
  counter.increment();
};

const setValue = () => {
  counter.count = 99;
};

const addState2 = () => {
  counter2.count++;
};
const addMethod2 = () => {
  counter2.addCount(10);
};
</script>

<template>
  <div>
    ■counter<br />
    <button @click="addState">直接加算</button>
    <button @click="addMethod">関数加算</button>
    <button @click="setValue">直接設定</button>
    <div>current count: {{ counter.count }}</div>
  </div>

  <br />
  ■counter2<br />
  <button @click="addState2">直接加算(counter2)</button>
  <button @click="addMethod2">関数加算(counter2)</button>
  <div>current count: {{ counter2.count }}</div>
</template>

<style scoped></style>
