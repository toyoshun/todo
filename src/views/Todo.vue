<template>
  <div>
    <div>
      <span>title: </span>
      <input type="text" v-model="state.title" />
    </div>
    <br />
    <div>
      <span>content: </span>
      <input type="text" v-model="state.content" />
    </div>
    <br />
    <div>
      <span>priority: </span>
      <input type="text" v-model="state.priority" />
    </div>
    <br />
    <div>
      <span>charge: </span>
      <input type="text" v-model="state.charge" />
    </div>
    <br />
    <div>
      <span>status: </span>
      <input type="text" v-model="state.status" />
    </div>
    <br />
    <button @click="addTodo">Add</button>
  </div>
  <br />
  <div>
    <h3>TodoList</h3>
    <table align="center">
      <thead>
        <tr>
          <th>title</th>
          <th>content</th>
          <th>priority</th>
          <th>charge</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.todoList" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.priority }}</td>
          <td>{{ item.charge }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { TodoItem, useStore } from "@/store";
import { useTodoStore } from "@/scripts/todo";

export default defineComponent({
  name: "Todo",
  components: {},
  setup() {
    // // Storeを取得する
    // const store = useStore();

    const { state, addTodo } = useTodoStore();

    return {
      state,
      addTodo,
    };
  },
});
</script>