import { resolve } from "path";
import { glob } from "glob";
import { bundleMDX } from "mdx-bundler";
import slugify from "slugify";
import fs from "fs";

import type { App } from "~/types";

const getAppsMdxFrontmatter = async (): Promise<App[]> => {
  const appsDir = resolve("./app/content/apps");
  const appsMdxFilepaths = await glob(resolve(appsDir, "**/*.mdx"));

  const apps: App[] = [];

  for (const appMdxFilepath of appsMdxFilepaths) {
    const { frontmatter } = await bundleMDX<App>({
      file: appMdxFilepath,
      cwd: appsDir,
    });

    const slug = slugify(frontmatter.title, { lower: true });

    apps.push({
      ...frontmatter,
      icon: `/assets/apps/${slug}.png`,
      slug,
    });
  }

  return apps;
};

export const loadAppsToJsonFile = async () => {
  const apps = await getAppsMdxFrontmatter();

  fs.writeFileSync(
    resolve("./public/apps.json"),
    JSON.stringify(apps, null, 2)
  );
};
