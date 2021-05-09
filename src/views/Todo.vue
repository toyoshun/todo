<template>
  <div>
    <div>
      <span>title: </span>
      <input type="text" v-model="todoItem.title" />
    </div>
    <br />
    <div>
      <span>content: </span>
      <input type="text" v-model="todoItem.content" />
    </div>
    <br />
    <div>
      <span>priority: </span>
      <input type="text" v-model="todoItem.priority" />
    </div>
    <br />
    <div>
      <span>charge: </span>
      <input type="text" v-model="todoItem.charge" />
    </div>
    <br />
    <div>
      <span>status: </span>
      <input type="text" v-model="todoItem.status" />
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
        <tr v-for="(item, index) in todoList" :key="index">
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
import { defineComponent, reactive } from "vue";
import { TodoItem, useStore } from "@/store";
import { useTodo } from "@/scripts/todo";

export default defineComponent({
  name: "Todo",
  components: {},
  setup() {
    // // Storeを取得する
    // const store = useStore();

    // const { todoItem, todoList, addTodo } = useTodo();

    let todoItem: TodoItem = reactive({
      title: "",
      content: "",
      priority: 0,
      charge: "",
      status: 0,
    });

    const todoList: TodoItem[] = reactive([]);

    // アイテム初期化する必要あり
    const addTodo = () => {
      todoList.push(todoItem);

      // プッシュしたのと同期してしまう
      // todoItem.title = "";
      // todoItem.content = "";
      // todoItem.priority = 0;
      // todoItem.charge = "";
      // todoItem.status = 0;

      // 同期はしないが入力欄がそのまま
      // todoItem = reactive({
      //   title: "",
      //   content: "",
      //   priority: 0,
      //   charge: "",
      //   status: 0,
      // });
    };

    return {
      todoItem,
      todoList,
      addTodo,
    };
  },
});
</script>