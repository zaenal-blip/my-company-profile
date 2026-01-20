// import { zodResolver } from "@hookform/resolvers/zod";
// import { Controller, useForm } from "react-hook-form";
// import { Link, useNavigate, redirect } from "react-router";
// import * as z from "zod";

// import { Button } from "~/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
// //   CardTitle,
// } from "~/components/ui/card";
// import { Field, FieldError, FieldLabel } from "~/components/ui/field";
// import { Input } from "~/components/ui/input";

// import { axiosInstance } from "~/lib/axios";
// import { useAuth } from "~/store/useAuth";

// /* ===============================
//    1️⃣ Loader (React Router Framework)
// ================================ */
// export async function loader() {
//   const user = useAuth.getState().user;
//   if (user) {
//     throw redirect("/");
//   }
//   return null;
// }

// /* ===============================
//    2️⃣ Zod Schema
// ================================ */
// const formSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// /* ===============================
//    3️⃣ Component
// ================================ */
// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   async function onSubmit(data: z.infer<typeof formSchema>) {
//     try {
//       const response = await axiosInstance.post("/api/users/login", {
//         login: data.email,
//         password: data.password,
//       });

//       login({
//         objectId: response.data.objectId,
//         name: response.data.name,
//         email: response.data.email,
//         userToken: response.data["user-token"],
//       });

//       console.log("ini response dari backend",response);
//       navigate("/", { replace: true });

//     } catch (error) {
//       console.error(error);
//       alert("Email atau password salah");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background px-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="text-center">
//           <Link to="/" className="text-2xl font-bold mb-2">
//             PT. Toyota Motor Manufacturing Indonesia
//           </Link>
//           {/* <CardTitle>Welcome back</CardTitle> */}
//           <CardDescription>
//             Enter your credentials to access your account
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" autoComplete="off">
//             {/* Email */}
//             <Controller
//               name="email"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel>Email</FieldLabel>
//                   <Input {...field} placeholder="you@example.com" />
//                   {fieldState.error && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             {/* Password */}
//             <Controller
//               name="password"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel>Password</FieldLabel>
//                   <Input
//                     {...field}
//                     type="password"
//                     placeholder="••••••••"
//                   />
//                   {fieldState.error && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//           </form>
//         </CardContent>

//         <CardFooter className="justify-center">
//           <p className="text-sm text-muted-foreground">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-primary hover:underline">
//               Register
//             </Link>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
