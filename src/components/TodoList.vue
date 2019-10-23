<template>
  <div id ="todo-list">
    <v-list>
      <v-list-item v-for="(todo, i) in todos" :key="i">
        <v-list-item-content>
          <v-list-item-title v-html="todo"></v-list-item-title>
          <v-btn class="ma-2" color="red" @click="deleteTodo(i)" dark>
            <v-icon dark left>mdi-cancel</v-icon>Delete it!
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list >
  </div>
</template>
<script lang="ts">
import {createComponent} from '@vue/composition-api';
import {PropType} from 'vue';

export default createComponent({
  props: {
    'todos': {
      type: Array as PropType<string[]>,
      required: true,
    },
    'deleteTodo': {
      type: Function,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>

</style>
