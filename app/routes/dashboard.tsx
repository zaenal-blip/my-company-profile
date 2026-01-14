import { redirect } from "react-router";
import { isAuthenticated } from "@/utils/auth";

export function loader() {
  if (!isAuthenticated()) {
    throw redirect("/");
  }
  return null;
}

export default function Dashboard() {
  return <div>Dashboard kosong (isi sendiri)</div>;
};


