import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("about", "routes/about.tsx"),
  route("business", "routes/business.tsx"),
  route("careers", "routes/careers.tsx"),
  route("contact", "routes/contact.tsx"),
  route("news", "routes/news.tsx"),
  route("sustainability", "routes/sustainability.tsx"),

  // ✅ DASHBOARD
  route("dashboard", "routes/dashboard.tsx"),

  // ✅ NOT FOUND (catch-all)
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
