import type { Config } from "@react-router/dev/config";
import { glob } from "glob";

const apps = await glob("*.mdx", {
  cwd: "./app/content/apps",
});

export default {
  ssr: false,
  async prerender({ getStaticPaths }) {
    const staticPaths = getStaticPaths();

    return [
      ...staticPaths,
      ...apps.map((app) => `/apps/${app.replace(".mdx", "")}`),
    ];
  },
} satisfies Config;
