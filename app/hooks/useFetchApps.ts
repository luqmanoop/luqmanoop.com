import { useMemo } from "react";
import useSWR from "swr";
import appsJson from "~/data/apps.json";

import type { Apps, AppsData } from "~/types";

export const fetchApps = async () => {
  return Object.values(appsJson) as Apps;
};

export const useFetchApps = () => useSWR("apps", fetchApps);

export const useFeaturedApps = () => {
  const { data: apps, ...rest } = useFetchApps();

  const featuredApps = useMemo(() => {
    if (!apps) return [];

    const appsToFeature = ["x-mass-unfollow", "1loc-vscode"];

    return apps.filter((app) => appsToFeature.includes(app.slug));
  }, [apps]);

  return { data: featuredApps, ...rest };
};
