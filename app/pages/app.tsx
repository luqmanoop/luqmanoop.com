import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

import { fetchApp, getMetadata } from "~/utils";
import type { Route } from "./+types/app";

export async function loader({ params }: Route.LoaderArgs) {
  const { frontmatter, code } = await fetchApp(params.appSlug);

  return {
    code,
    app: frontmatter,
    metadata: getMetadata(frontmatter),
  };
}

export const meta = ({ data }: Route.MetaArgs) => data.metadata;

export default function AppPage({ loaderData }: Route.ComponentProps) {
  const { app, code } = loaderData;

  const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="prose dark:prose-invert prose-headings:tracking-tighter prose-headings:mb-0 prose-headings:text-gray-900 dark:prose-headings:text-slate-300 prose-p:text-gray-900 dark:prose-p:text-slate-300">
      <section className="flex flex-col items-center text-center gap-4 mb-16">
        <img src={app.icon} alt={app.title} className="w-56 h-56 mb-0" />
        <h1 className="text-4xl md:text-6xl font-bold">{app.title}</h1>
        <p className="text-xl md:text-2xl mt-2 mb-2">{app.description}</p>
      </section>

      <div className="">
        <MdxComponent app={app} />
      </div>
    </div>
  );
}
