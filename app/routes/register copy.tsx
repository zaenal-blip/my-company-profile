// import { Link } from "react-router";
// import { Button } from "~/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "~/components/ui/card";
// import { Input } from "~/components/ui/input";
// import { Label } from "~/components/ui/label";

// export default function Register() {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // UI only - no actual registration logic
//     console.log("Registration submitted (UI only)");
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background px-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="text-center">
//           <Link to="/" className="text-2xl font-bold text-foreground mb-2">
//             PT Toyota Motor Manufacturing Indonesia
//           </Link>
//           <CardTitle className="text-xl">Create an account</CardTitle>
//           <CardDescription>Enter your details to get started</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Name */}
//             <div className="space-y-2">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" type="text" placeholder="John Doe" required />
//             </div>

//             {/* Email */}
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <Button type="submit" className="w-full">
//               Register
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter className="justify-center">
//           <p className="text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-primary hover:underline font-medium"
//             >
//               Login
//             </Link>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }