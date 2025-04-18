import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";
import { globby } from "globby";

const pages = await globby("pages/*.mdx", {
  cwd: import.meta.dirname,
  expandDirectories: true,
});

const blogPosts = await globby("content/blog/*.mdx", {
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

  ...prefix("/blog", [
    layout("./layouts/blog.tsx", [
      index("content/blog/index.mdx"),
      ...blogPosts.filter((post) => !post.includes("index.mdx")).map((post) =>
        route(post.replace(/^content\/blog\//, "").replace(".mdx", ""), post)
      ),
    ]),
  ]),

  ...prefix("/apps", [index("content/apps/index.mdx")]),
] satisfies RouteConfig;
