import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from "@react-router/dev/routes";
import { glob } from "glob";

const pages = await glob("pages/*.mdx", {
	cwd: import.meta.dirname,
});

export default [
	index("routes/home.tsx"),

	layout("./layouts/pages.tsx", [
		...pages.map((page) =>
			route(page.replace(".mdx", "").replace("pages/", ""), page),
		),
	]),

	...prefix("/blog", [
		index("pages/blog.tsx"),
		route(":postSlug", "pages/blog-post.tsx"),
	]),

	...prefix("/apps", [
		layout("./layouts/apps-layout.tsx", [index("pages/apps.tsx")]),

		layout("./layouts/app.tsx", [route(":appSlug", "pages/app.tsx")]),
	]),
] satisfies RouteConfig;
