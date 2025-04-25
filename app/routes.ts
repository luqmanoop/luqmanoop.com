import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";
import { glob } from "glob";

const pages = await glob("pages/*.mdx", {
  cwd: import.meta.dirname,
});

const blogPosts = await glob("content/blog/*.mdx", {
  cwd: import.meta.dirname,
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
      ...blogPosts
        .filter((post) => !post.includes("index.mdx"))
        .map((post) =>
          route(post.replace(/^content\/blog\//, "").replace(".mdx", ""), post)
        ),
    ]),
  ]),

  ...prefix("/apps", [
    layout("./layouts/apps-layout.tsx", [index("pages/apps.tsx")]),

    layout("./layouts/app.tsx", [route(":appSlug", "pages/app.tsx")]),
  ]),
] satisfies RouteConfig;
