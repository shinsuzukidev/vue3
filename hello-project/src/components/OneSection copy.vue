<script setup lang="ts">
interface Props {
  rand: number;
}

interface Emits {
  (evevt: "createNewRand"): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const onNewRanmdButtonClick = (): void => {
  emit("createNewRand");
};
</script>

<template>
  <section class="box">
    <p>child component rand display: {{ rand }}</p>
    <button v-on:createNewRand="onNewRanmdButtonClick">new rand</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px dashed;
  margin: 1px;
}
</style>
