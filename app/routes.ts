import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("about", "routes/about.tsx"),
  route("business", "routes/business.tsx"),
  route("careers", "routes/careers.tsx"),
  route("contact", "routes/contact.tsx"),
  route("news", "routes/news.tsx"),
  route("news/:slug", "routes/news-detail.tsx"),
  route("sustainability", "routes/sustainability.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
