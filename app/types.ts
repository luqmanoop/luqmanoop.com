
export interface Meta  {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

export interface App extends Meta {
  tags: string[];
  slug: string;
  icon: string;
};

export type Apps = App[];
