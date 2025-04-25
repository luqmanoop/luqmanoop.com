import { resolve } from "path";
import { glob } from "glob";
import { bundleMDX } from "mdx-bundler";
import slugify from "slugify";
import fs from "fs";

import type { App, AppsData } from "~/types";

const getAppsMdxFrontmatter = async (): Promise<AppsData> => {
  const appsDir = resolve("./app/content/apps");
  const appsMdxFilepaths = await glob(resolve(appsDir, "**/*.mdx"));

  const apps: AppsData = {};

  for (const appMdxFilepath of appsMdxFilepaths) {
    const { frontmatter } = await bundleMDX<App>({
      file: appMdxFilepath,
      cwd: appsDir,
    });

    const slug = slugify(frontmatter.title, { lower: true });

    apps[slug] = {
      ...frontmatter,
      icon: `/assets/apps/${slug}.png`,
      slug,
    };
  }

  return apps;
};

export const loadAppsToJsonFile = async () => {
  const apps = await getAppsMdxFrontmatter();

  fs.writeFileSync(
    resolve("./app/data/apps.json"),
    JSON.stringify(apps, null, 2)
  );
};
