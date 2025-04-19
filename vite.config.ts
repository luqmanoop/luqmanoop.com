import { reactRouter } from "@react-router/dev/vite";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: "react",
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    include: ["@mdx-js/react"],
  },
});
