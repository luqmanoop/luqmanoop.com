import { basename, resolve } from "node:path";
import { glob } from "glob";
import { bundleMDX } from "mdx-bundler";
import slugify from "slugify";
import type { App, Apps } from "~/types";

import { getAssets } from "./assets";
import { PUBLIC_DIRNAME, SITE_URL } from "./constants";

const appsContentDir = resolve("./app/content/apps");
const appsAssetsDir = resolve(PUBLIC_DIRNAME, "assets/apps");

const getAppMdxBundle = async (filename: string) => {
	const appMdxFilepath = resolve(appsContentDir, `${filename}.mdx`);

	const { code, frontmatter } = await bundleMDX<App>({
		file: appMdxFilepath,
		cwd: appsContentDir,
	});

	const slug = frontmatter.slug || slugify(basename(filename), { lower: true });
	const assetDir = resolve(appsAssetsDir, slug);
	const assets = await getAssets(assetDir);

	return {
		code,
		frontmatter: {
			...frontmatter,
			slug,
			canonicalUrl: `${SITE_URL}/apps/${slug}`,
			imageUrl: `${SITE_URL}${assets.icon}`,
			assets,
		} as App,
	};
};

export const fetchApps = async () => {
	const apps = await glob(resolve(appsContentDir, "*.mdx"));

	const appsData: Apps = [];

	for (const app of apps) {
		const filename = app.replace(".mdx", "");
		const { frontmatter } = await getAppMdxBundle(filename);

		appsData.push(frontmatter);
	}

	return appsData;
};

export const fetchApp = async (slug: string) => {
	const { frontmatter, code } = await getAppMdxBundle(slug);

	return {
		frontmatter,
		code,
	};
};

export const getFeaturedApps = async () => {
	const apps = await fetchApps();

	const appsToFeature = ["x-mass-unfollow", "1loc-vscode"];

	return apps.filter((app) => appsToFeature.includes(app.slug));
};
