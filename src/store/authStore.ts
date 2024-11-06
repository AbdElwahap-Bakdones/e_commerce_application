import { create } from "zustand";
import {
  get_kind_user,
  is_logged,
  logout_storage,
} from "../actions/ManageUser";

interface StoreType {
  logged: boolean;
  kind: "Guest" | "User" | "Admin";
  set_logged: (status: boolean) => void;
  set_kind: (kind: "Guest" | "User" | "Admin") => void;
}

const AuthStore = create<StoreType>((set) => ({
  kind: get_kind_user(),
  logged: is_logged(),
  set_kind(kind) {
    set({ kind: kind });
  },
  set_logged(status) {
    if (!status) logout_storage();
    set({ logged: status });
  },
}));
export default AuthStore;
