import { create } from "zustand";
import UserType from "../types/user";
interface StoreType {
  user: UserType;
  set_user: (user: UserType) => void;
  remove_user: () => void;
  edit_balance: (balance: number) => void;
}
const UserStore = create<StoreType>((set) => ({
  user: { balance: 0, email: "", name: "", password: "", kind: "User" },
  remove_user() {
    ({}) as UserType;
  },
  set_user(user) {
    set({ user: user });
  },
  edit_balance(balance) {
    set({
      user: {
        email: this.user.email,
        name: this.user.name,
        password: this.user.password,
        balance: balance,
        kind: "User",
      },
    });
  },
}));

export default UserStore;
