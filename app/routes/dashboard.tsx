import { redirect } from "react-router";
import { useAuth } from "@/store/useAuth";

export async function loader() {
  const user = useAuth.getState().user;
  if (!user) {
    throw redirect("/login");
  }
  return null;
}

export default function Dashboard() {
  return <div>Dashboard kosong (isi sendiri)</div>;
}
