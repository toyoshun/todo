import { useStore, TodoItem } from "@/store";
import { reactive } from "vue";
// import { auth as firebaseAuth, authObject } from "@/scripts/firebase";

const todo = () => {
  // Storeを取得する
  const store = useStore();

  const todoItem: TodoItem = reactive({
    title: "",
    content: "",
    priority: 0,
    charge: "",
    status: 0,
  });

  const todoList: TodoItem[] = reactive([]);

  const addTodo = (item: TodoItem) => {
    todoList.push(item);
    initializeItem();
  };

  const initializeItem = () => {
    todoItem.title = "";
    todoItem.content = "";
    todoItem.priority = 0;
    todoItem.charge = "";
    todoItem.status = 0;
  };

  return { todoItem, todoList, addTodo };
};

export function useTodo(): ReturnType<typeof todo> {
  return todo();
}
