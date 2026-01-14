import Backendless from "./backendless";

/* =========================
   REGISTER
========================= */
export const registerService = async (
  email: string,
  password: string,
  fullName?: string
) => {
  return Backendless.UserService.register({
    email,
    password,
    name: fullName,
  });
};

/* =========================
   LOGIN
========================= */
export const loginService = async (
  email: string,
  password: string
) => {
  return Backendless.UserService.login(email, password, true);
};

/* =========================
   LOGOUT
========================= */
export const logoutService = async () => {
  await Backendless.UserService.logout();
};
