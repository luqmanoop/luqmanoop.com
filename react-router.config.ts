import type { Config } from "@react-router/dev/config";
import { glob } from "glob";

const apps = await glob("*.mdx", {
	cwd: "./app/content/apps",
});

const blogPosts = await glob("*.mdx", {
	cwd: "./app/content/blog",
});

export default {
	ssr: false,
	async prerender({ getStaticPaths }) {
		const staticPaths = getStaticPaths();

		return [
			...staticPaths,
			...apps.map((app) => `/apps/${app.replace(".mdx", "")}`),
			...blogPosts.map((post) => `/blog/${post.replace(".mdx", "")}`),
		];
	},
} satisfies Config;
