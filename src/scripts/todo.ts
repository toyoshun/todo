import { useStore, TodoItem } from "@/store";
import { InjectionKey, reactive } from "vue";
// import { auth as firebaseAuth, authObject } from "@/scripts/firebase";

const todoStore = () => {
  // Storeを取得する
  const store = useStore();

  const state = reactive({
    todoList: [{}] as TodoItem[],
    title: "",
    content: "",
    priority: 0,
    charge: "",
    status: 0,
  });

  const addTodo = () => {
    const todoItem: TodoItem = {
      title: state.title,
      content: state.content,
      priority: state.priority,
      charge: state.charge,
      status: state.status,
    };
    state.todoList.push(todoItem);

    initializeItem();
  };

  const initializeItem = () => {
    state.title = "";
    state.content = "";
    state.priority = 0;
    state.charge = "";
    state.status = 0;
  };

  return { state, addTodo };
};

// export type TodoStore =ReturnType<typeof todoStore>;

// export const todoStoreKey:InjectionKey<TodoStore> =Symbol('authStore')

export function useTodoStore(): ReturnType<typeof todoStore> {
  return todoStore();
}
