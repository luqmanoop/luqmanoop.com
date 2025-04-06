import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";
import { globby } from "globby";

const pages = await globby("pages/*.mdx", {
  cwd: import.meta.dirname,
  expandDirectories: true,
});

export default [
  index("routes/home.tsx"),

  layout("./layouts/pages.tsx", [
    ...pages.map((page) =>
      route(page.replace(".mdx", "").replace("pages/", ""), page)
    ),
  ]),
] satisfies RouteConfig;
