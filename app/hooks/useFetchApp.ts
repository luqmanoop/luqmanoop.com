import useSWR from "swr";

import type { AppsData } from "~/types";
import appsJson from "~/data/apps.json";

export const fetchApp = (slug: string) => {
  const apps = appsJson as AppsData;
  const app = apps[slug];

  if (!app) {
    throw new Error(`App with slug ${slug} not found`);
  }

  return app;
};

export const useFetchApp = (slug: string) =>
  useSWR(`app-${slug}`, () => fetchApp(slug));
