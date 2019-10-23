<template>
  <div id ="add-todo">
    <v-text-field
      v-model="todo"
      label="Regular"></v-text-field>
    <v-btn color="primary" @click="onClickAdd">ADD</v-btn>
  </div>
</template>
<script lang="ts">
import {createComponent, ref} from '@vue/composition-api';

interface Prop {
  addTodos: (todo: string) => void;
}

export default createComponent({
  props: {
    addTodos: {
      type: Function,
      required: true,
    },
  },
  setup(props: Prop) {
    const todo = ref('');
    const onClickAdd = () => {
      props.addTodos(todo.value);
      todo.value = '';
    };
    return {
      todo,
      onClickAdd,
    };
  },
});
</script>
<style lang="scss" scoped>
#add-todo {
  display: flex;
}
</style>
