import { auth } from "@/scripts/firebase";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/user-auth",
    name: "UserAuth",
    component: () => import("../views/UserAuth.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// フィルター
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    // 認証状態を取得
    auth.onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        // 認証されていない場合、認証画面へ
        next({ name: "UserAuth" });
      }
    });
  } else {
    next();
  }
});

export default router;
