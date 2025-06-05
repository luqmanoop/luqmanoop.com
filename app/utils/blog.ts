import { basename, resolve } from "node:path";
import { glob } from "glob";
import { bundleMDX } from "mdx-bundler";
import readingTime from "reading-time";
import slugify from "slugify";

import type { Post, Posts } from "~/types";

import { getPostImageUrl } from "./assets";
import { PUBLIC_DIRNAME, SITE_URL } from "./constants";

const blogContentDir = resolve("./app/content/blog");
const blogAssetsDir = resolve(PUBLIC_DIRNAME, "assets/blog");

const getPostMdxBundle = async (filename: string) => {
	const postMdxFilepath = resolve(blogContentDir, `${filename}.mdx`);

	const { code, frontmatter } = await bundleMDX<Post>({
		file: postMdxFilepath,
		cwd: blogContentDir,
	});

	const slug = frontmatter.slug || slugify(basename(filename), { lower: true });

	const imageUrl = await getPostImageUrl(blogAssetsDir, slug);

	return {
		code,
		frontmatter: {
			...frontmatter,
			slug,
			imageUrl,
			canonicalUrl: `${SITE_URL}/blog/${slug}`,
			readingTime: readingTime(code).text,
		} as Post,
	};
};

export const fetchPosts = async () => {
	const posts = await glob(resolve(blogContentDir, "*.mdx"));

	const postsData: Posts = [];

	for (const post of posts) {
		const filename = post.replace(".mdx", "");
		const { frontmatter } = await getPostMdxBundle(filename);

		if (frontmatter.isDraft) {
			continue;
		}

		postsData.push(frontmatter);
	}

	return postsData;
};

export const fetchPost = async (slug: string) => {
	const { frontmatter, code } = await getPostMdxBundle(slug);

	return {
		frontmatter,
		code,
	};
};
