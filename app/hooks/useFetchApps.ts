import { useMemo } from "react";
import useSWR from "swr";

import type { Apps } from "~/types";

const fetchApps = async () => {
  const response = await fetch("/apps.json");
  const apps = await response.json();

  return apps as Apps;
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
