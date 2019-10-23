import {ref, Ref} from '@vue/composition-api';

let todos: Ref<string[]>;

const useTodos = () => {
  if (todos === undefined) {
    todos = ref([] as string[]);
  }

  const addTodos = (todo: string) => {
    todos.value.push(todo);
  };

  const deleteTodo = (i: number) => {
    todos.value.splice(i, 1);
  };

  return {
    todos,
    addTodos,
    deleteTodo,
  };
};

export {useTodos};
