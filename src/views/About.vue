<template>
  <div class="about">
    <add-todo :addTodos="addTodos" />
    <todo-list :todos="todos" :deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {createComponent} from '@vue/composition-api';
import AddTodo from '@/components/AddTodo.vue';
import TodoList from '@/components/TodoList.vue';
import {useTodos} from '@/composition/Todo';

export default createComponent({
  components: {
    AddTodo,
    TodoList,
  },
  setup() {
    const {todos, addTodos, deleteTodo} = useTodos();
    return {
      todos,
      addTodos,
      deleteTodo,
    };
  },
});
</script>
