import { ref } from "vue";
import { extractIdentifiers } from "vue/compiler-sfc";

export const useTodoList = () => {
  const todoList = ref<{ id: number; task: string; checked: boolean }[]>([]);
  const ls = localStorage.todoList;
  todoList.value = ls ? JSON.parse(ls) : [];
  //  console.log(todoList.value);

  const editId = ref(-1);

  //
  const findById = (id: number) => {
    return todoList.value.find((x) => x.id === id);
  };

  //
  const findIndexById = (id: number) => {
    return todoList.value.findIndex((x) => x.id === id);
  };

  //
  const add = (task: string) => {
    const id = new Date().getTime();
    todoList.value.push({ id: id, task: task, checked: false });
    localStorage.todoList = JSON.stringify(todoList.value);
  };

  //
  const show = (id: number) => {
    editId.value = id;
    return findById(id)?.task;
  };

  //
  const edit = (task: string) => {
    const todo = findById(editId.value);
    const index = findIndexById(editId.value);

    if (todo) {
      todo.task = task;
      todoList.value.splice(index, 1, todo);
      localStorage.todoList = JSON.stringify(todoList.value);
      editId.value = -1;
    }
  };

  //
  const del = (id: number) => {
    const todo = findById(id);

    if (todo) {
      if (confirm("delete ? > " + todo.task)) {
        todoList.value.splice(findIndexById(id), 1);
        localStorage.todoList = JSON.stringify(todoList.value);
      }
    }
  };

  //
  const check = (id: number) => {
    const todo = findById(id);
    const index = findIndexById(id);

    if (todo) {
      todo.checked = !todo.checked;
      todoList.value.splice(index, 1, todo);
      localStorage.todoList = JSON.stringify(todoList.value);
    }
  };

  return { todoList, show, add, edit, del, check };
};
