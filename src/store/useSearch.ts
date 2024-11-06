import React from "react";
import { create } from "zustand";
interface StoreType {
  search_key: string;
  set_search_key: (key: string) => void;
}
const useSearch = create<StoreType>((set) => ({
  search_key: "",
  set_search_key: (key) => set({ search_key: key }),
}));

export default useSearch;
