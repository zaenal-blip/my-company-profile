import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ThemeProvider } from "next-themes";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "./app.css";

export default function Root() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />

          <main>
            <Outlet />
          </main>

          <Footer />
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
