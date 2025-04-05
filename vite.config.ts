import { reactRouter } from "@react-router/dev/vite";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: "react",
      providerImportSource: "@mdx-js/react",
      
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    include: ["@mdx-js/react"],
  },
});
