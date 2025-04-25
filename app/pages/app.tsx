import { lazy, Suspense } from "react";
import { type UIMatch } from "react-router";
import { fetchApp } from "~/hooks/useFetchApp";
import type { App } from "~/types";
import type { Route } from "./+types/app";

type AppLoader = (slug: string) => App;

type Handle = {
  getApp: AppLoader;
};

type Match = UIMatch<unknown, Handle | null>;

export const handle: Handle = {
  getApp: (slug: string) => fetchApp(slug),
};

const getRouteMatch = (matches: Match[]) => {
  return matches.find((match) => match.handle?.getApp) as Match;
};

const getApp = (matches: Match[], slug: string) => {
  return getRouteMatch(matches).handle!.getApp(slug);
};

export function meta({ params, matches }: Route.ComponentProps) {
  const app = getApp(matches as Match[], params.appSlug);

  return [
    {
      title: app.title,
    },
    {
      name: "description",
      content: app.description,
    },
  ];
}

export default function AppPage({ params, matches }: Route.ComponentProps) {
  const app = getApp(matches as Match[], params.appSlug);

  const MdxComponent = lazy(
    () => import(`../content/apps/${params.appSlug}.mdx`)
  );

  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-col items-center text-center">
        <img
          src={app.icon}
          alt={app.title}
          className="w-56 h-56 not-prose-img"
        />
        <h1 className="text-3xl md:text-5xl font-bold not-prose-headings">
          {app.title}
        </h1>
        <p className="text-lg md:text-xl tracking-tight prose-p:m-0">
          {app.description}
        </p>
      </div>

      <div className="py-12">
        <Suspense fallback={<div>Loading...</div>}>
          <MdxComponent app={app} />
        </Suspense>
      </div>
    </div>
  );
}
