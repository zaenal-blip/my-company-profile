export const register = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
};

export const login = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const valid = users.some(
    (u: any) => u.email === email && u.password === password
  );

  if (valid) {
    localStorage.setItem("auth", "true");
    return true;
  }
  return false;
};

export const isAuthenticated = () =>
  localStorage.getItem("auth") === "true";
