// import { Button } from "@/components/ui/button";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X, User } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router";
// import AuthDialog from "@/components/auth/authdialog"; // 🔐 AUTH

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Business & Products", href: "/business" },
//   { name: "Sustainability", href: "/sustainability" },
//   { name: "News", href: "/news" },
//   { name: "Careers", href: "/careers" },
//   { name: "Contact", href: "/contact" },
// ];

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [authOpen, setAuthOpen] = useState(false); // 🔐 AUTH
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-xl">
//                 T
//               </span>
//             </div>
//             <div className="hidden sm:block">
//               <p className="font-bold text-lg text-foreground">TMMIN</p>
//               <p className="text-xs text-muted-foreground">
//                 Toyota Motor Manufacturing Indonesia
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   location.pathname === item.href
//                     ? "text-primary bg-secondary"
//                     : "text-muted-foreground hover:text-foreground hover:bg-muted"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Actions */}
//           <div className="flex items-center gap-2">
//             {/* 🔐 Login Button */}
//             <Button
//               size="icon"
//               onClick={() => setAuthOpen(true)}
//               className="hidden lg:flex bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
//             >
//               <User className="h-5 w-5" />
//             </Button>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden bg-secondary"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* 🔐 Auth Dialog */}
//       <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-background border-t"
//           >
//             <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                     location.pathname === item.href
//                       ? "text-primary bg-secondary"
//                       : "text-muted-foreground hover:text-foreground hover:bg-muted"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {/* 🔐 Login (Mobile) */}
//               <Button
//                 variant="outline"
//                 className="mt-2"
//                 onClick={() => {
//                   setIsMobileMenuOpen(false);
//                   setAuthOpen(true);
//                 }}
//               >
//                 Login / Register
//               </Button>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;
