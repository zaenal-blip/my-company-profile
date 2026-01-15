// import { create } from "zustand";
// import Backendless from "@/lib/backendless";

// interface AuthState {
//   user: any | null;
//   setUser: (user: any) => void;
//   logout: () => void;
//   checkSession: () => Promise<void>;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,

//   setUser: (user) => set({ user }),

//   logout: async () => {
//     await Backendless.UserService.logout();
//     set({ user: null });
//   },

//   checkSession: async () => {
//     const user = await Backendless.UserService.getCurrentUser();
//     set({ user });
//   },
// }));
