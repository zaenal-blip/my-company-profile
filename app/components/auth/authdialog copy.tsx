// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "~/components/ui/dialog";
// import { Card, CardContent, CardHeader } from "~/components/ui/card";
// import { Button } from "~/components/ui/button";
// import { Input } from "~/components/ui/input";

// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { login, register } from "@/utils/auth";

// type Props = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// };

// export default function AuthDialog({ open, onOpenChange }: Props) {
//   const navigate = useNavigate();
//   const [mode, setMode] = useState<"login" | "register">("login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     if (mode === "register") {
//       register(email, password);
//       alert("Register berhasil");
//       setMode("login");
//       return;
//     }

//     const success = login(email, password);
//     if (success) {
//       onOpenChange(false);
//       navigate("./dashboard.tsx");
//     } else {
//       alert("Email / password salah");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle className="capitalize">
//             {mode}
//           </DialogTitle>
//         </DialogHeader>

//         <Card className="border-0 shadow-none">
//           <CardHeader />

//           <CardContent className="space-y-4">
//             <Input
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <Button className="w-full" onClick={handleSubmit}>
//               {mode === "login" ? "Login" : "Register"}
//             </Button>

//             <Button
//               variant="ghost"
//               className="w-full text-sm"
//               onClick={() =>
//                 setMode(mode === "login" ? "register" : "login")
//               }
//             >
//               {mode === "login"
//                 ? "Belum punya akun? Register"
//                 : "Sudah punya akun? Login"}
//             </Button>
//           </CardContent>
//         </Card>
//       </DialogContent>
//     </Dialog>
//   );
// }
