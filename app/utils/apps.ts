import { glob } from "glob";
import { bundleMDX } from "mdx-bundler";
import { basename, resolve } from "path";

import slugify from "slugify";
import type { App, Apps } from "~/types";

import { SITE_NAME, SITE_URL } from "./constants";

const appsDir = resolve("./app/content/apps");

const getAppMdxBundle = async (filename: string) => {
  const appMdxFilepath = resolve(appsDir, `${filename}.mdx`);

  const { code, frontmatter } = await bundleMDX<App>({
    file: appMdxFilepath,
    cwd: appsDir,
  });

  const slug = frontmatter.slug || slugify(basename(filename), { lower: true });
  const icon = frontmatter.icon || `/assets/apps/${slug}.png`;

  return {
    code,
    frontmatter: {
      ...frontmatter,
      slug,
      icon,
      url: `${SITE_URL}/apps/${slug}`,
      imageUrl: `${SITE_URL}${icon}`,
    } as App,
  };
};

export const fetchApps = async () => {
  const apps = await glob(resolve(appsDir, "*.mdx"));

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

