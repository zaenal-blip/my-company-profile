import type { ReactNode } from "react";
import { useEffect } from "react";
import { useAuth } from "~/store/useAuth";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const login = useAuth((state) => state.login);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      login(JSON.parse(storedUser));
    }
  }, [login]);

  return <>{children}</>;
};

export default Layout;
