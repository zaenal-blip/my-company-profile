import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserAuth = {
  objectId: string;
  name: string;
  email: string;
  userToken: string;
};

type Store = {
  user: UserAuth | null;
  login: (payload: UserAuth) => void;
  logout: () => void;
};

export const useAuth = create<Store>()(
  persist(
    (set) => ({
      user: null,
      login: (payload) => set(() => ({ user: payload })),
      logout: () => set(() => ({ user: null })),
    }),
    { name: "blog-storage" }
  )
);