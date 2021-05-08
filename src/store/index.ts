import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// import { auth } from "./modules/auth";

export interface TodoItem {
  name: string;
  author: string;
}

export interface User {
  isLoggedin: boolean;
  name: string;
  email: string;
}

// ストアの型を定義する
export interface State {
  todoItems: TodoItem[];
  user: User;
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol();

// Storeを作成する
export const store = createStore<State>({
  state: {
    todoItems: [],
    user: { isLoggedin: false, name: "", email: "" },
  },
  getters: {},
  actions: {
    // 認証
    signIn({ commit }, user: User) {
      commit("SIGN_IN", { user: user });
    },
    signOut({ commit }) {
      commit("SIGN_OUT");
    },
    setUser({ commit }, user: User) {
      commit("SET_USER", { user: user });
    },
  },
  mutations: {
    SIGN_IN(state, { user }) {
      state.user = user;
    },
    SIGN_OUT(state) {
      state.user = { isLoggedin: false, name: "", email: "" };
    },
    SET_USER(state, { user }) {
      state.user = user;
    },
  },
});

// 独自のuserStoreメソッドを定義する
export function useStore(): Store<State> {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key);
}
