<script setup lang="ts">
const aaa = () => {};

type Props = {
  color: string;
};
const props = defineProps<Props>();

type Emits = {
  onClick: [void];
  //onClick: [str: string, id: number];
};

const emit = defineEmits<Emits>();
const handleClick = () => {
  emit("onClick");
};
//const handleClick = (str: string, id: number) => {
//  emit("onClick", str, id);
//};
</script>

<template>
  <button class="btn" :class="props.color" @click="handleClick()"><slot /></button>
</template>

<style>
.btn {
  padding: 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
}

.blue {
  background-color: #03a9f4;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}
</style>
