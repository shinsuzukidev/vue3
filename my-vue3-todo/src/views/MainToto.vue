<script setup lang="ts">
import { ref, computed } from "vue";
import { useTodoList } from "@/composables/useTodoList";
import BaseButton from "@/components/BaseButton.vue";
import ButtonAdd from "@/components/ButtonAdd.vue";

const todo = ref<string | undefined>();
const isEdit = ref(false);
const { todoList, add, show, edit, del, check } = useTodoList();

const addTodo = () => {
  if (!todo.value) return;
  add(todo.value);
  todo.value = "";
};

const showTodo = (id: number) => {
  todo.value = show(id);
  if (todo.value) {
    isEdit.value = true;
  }
};

//
const editTodo = () => {
  if (!todo.value) return;
  edit(todo.value);
  isEdit.value = false;
  todo.value = "";
};

//
const deleteTodo = (id: number) => {
  isEdit.value = false;
  del(id);
};

const changeCheck = (id: number) => {
  check(id);
};

const countFin = computed(() => {
  return todoList.value.filter((x) => x.checked).length;
});

// const test = (str: string, id: number) => {
//   alert("call test, parama:" + str + "_" + id);
// };
</script>

<template>
  <div>
    <input type="text" class="todo_input" placeholder="+ TODOを入力" v-model="todo" />
    <BaseButton color="green" v-on:click="editTodo" v-if="isEdit">変更</BaseButton>
    <ButtonAdd @addClick="addTodo" v-else>追加</ButtonAdd>
  </div>
  <div class="box_list">
    <div v-for="todoItem in todoList" v-bind:key="todoItem.id" class="todo_list">
      <div class="todo" :class="{ fin: todoItem.checked }">
        <input
          type="checkbox"
          class="check"
          v-on:change="changeCheck(todoItem.id)"
          v-bind:checked="todoItem.checked"
        />
        <label>{{ todoItem.task }}</label>
      </div>
      <div class="btns">
        <BaseButton color="green" @click="showTodo(todoItem.id)">編</BaseButton>
        <BaseButton color="pink" @click="deleteTodo(todoItem.id)">削</BaseButton>
      </div>
    </div>
  </div>

  <div class="finCount">
    <span>完了: {{ countFin }}</span>
    <span>未完了: {{ todoList.length - countFin }}</span>
  </div>
</template>

<style scoped>
.todo_input {
  width: 250px;
  padding: 6px 8px;
  margin-right: 8px;
  font-size: 18px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

.btn {
  position: relative;
  padding: 6px 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
}
.btn:active {
  top: 1px;
}

.box_list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
}

.todo_list {
  display: flex;
  gap: 8px;
  align-items: center;
}

.todo {
  width: 250px;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.check {
  margin-right: 12px;
  transform: scale(1.6);
}

.fin {
  color: #777;
  text-decoration: line-through;
  background-color: #ddd;
}
.finCount {
  margin-top: 8px;
  font-size: 0.8em;
}
</style>
