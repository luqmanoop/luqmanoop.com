export type App = {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  icon: string;
};

export type Apps = App[];

export type AppsData = Record<string, App>;