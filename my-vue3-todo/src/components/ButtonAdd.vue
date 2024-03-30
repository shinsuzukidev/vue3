<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";

type Emits = {
  addClick: [void];
};

const emit = defineEmits<Emits>();
const handleClick = () => {
  emit("addClick");
};
</script>

<template>
  <BaseButton color="blue" @onClick="handleClick()">追加</BaseButton>
</template>
