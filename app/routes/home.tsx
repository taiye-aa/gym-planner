import { useAuth } from "~/context/AuthContext";
import type { Route } from "./+types/home";
import { Navigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const {user, isLoading} = useAuth()
  if(user && !isLoading){
    return <Navigate to="/profile" replace/>
  }
  return <div>Home</div>;
}
