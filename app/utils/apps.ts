import { resolve } from "path";
import { glob } from "glob";
import { bundleMDX } from "mdx-bundler";
import slugify from "slugify";

type App = {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  icon: string;
};

export const getApps = async (): Promise<App[]> => {
  const appsDir = resolve("./app/content/apps");
  const appMdxFilepaths = await glob(resolve(appsDir, "**/*.mdx"));

  const apps: App[] = [];

  for (const appMdxFilepath of appMdxFilepaths) {
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

export const getFeaturedApps = async (): Promise<App[]> => {
  const appsToFeature = ["x-mass-unfollow", "1loc-vscode"];
  const apps = await getApps();

  return apps.filter((app) => appsToFeature.includes(app.slug));
};
