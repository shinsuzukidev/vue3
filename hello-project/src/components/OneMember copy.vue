<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
const props = withDefaults(defineProps<Props>(), { note: "--" });

const localPoints = ref(props.points);
// const localNote = computed((): string => {
//   let localNote = props.note;
//   if (localNote == undefined) {
//     localNote = "--";
//   }
//   return localNote;
// });

interface Emits {
  (event: "incrementPoint", id: number, upPoint: number): void;
}
const emit = defineEmits<Emits>();

const pointUp = (): void => {
  //localPoints.value++;
  emit("incrementPoint", props.id, 10);
};
</script>

<template>
  <section class="box">
    <h4>{{ name }} info</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>mail</dt>
      <dd>{{ email }}</dd>
      <dt>point</dt>
      <dd>{{ points }}</dd>
      <dt>bikou</dt>
      <dd>{{ note }}</dd>
    </dl>
    <button v-on:click="pointUp">point add</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px dashed;
  margin: 10px;
}
</style>
