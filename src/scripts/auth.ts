import { useStore, User } from "@/store";
import firebase from "firebase/app";
import { auth as firebaseAuth, authObject } from "@/scripts/firebase";

const auth = () => {
  // Storeを取得する
  const store = useStore();

  // サインイン処理
  const signIn = () => {
    // Google認証
    const provider = new authObject.GoogleAuthProvider();

    // 認証実施
    firebaseAuth.signInWithPopup(provider).catch((err) => {
      console.error(err);
      // エラー処理
    });
  };

  // サインアウト処理
  const signOut = () => {
    firebaseAuth.signOut();
  };

  // ストア登録
  const setUser = (firebaseUser: firebase.User | null) => {
    const user = {
      isLoggedin: !!firebaseUser,
      name: firebaseUser?.displayName,
      email: firebaseUser?.email,
    } as User;

    store.dispatch("setUser", user);
  };

  // 認証状態管理
  firebaseAuth.onAuthStateChanged((user) => setUser(user));

  return { signIn, signOut };
};

export function useAuth(): ReturnType<typeof auth> {
  return auth();
}
