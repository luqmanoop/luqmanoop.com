export interface Meta {
	title: string;
	description: string;
	/** absolute url to the image */
	imageUrl?: string;
	canonicalUrl: string;
}

export interface Assets {
	icon: string;
	screenshots: string[];
	videos: string[];
}

export interface App extends Meta {
	tags: string[];
	slug: string;
	assets: Assets;
	cta?: {
		label: string;
		url: string;
	};
	isArchived?: boolean;
	releasedDate: string;
	isNew?: boolean;
	isPaid?: boolean;
}

export type Apps = App[];

export interface Post extends Meta {
	slug: string;
	date: string;
	description: string;
	isDraft?: boolean;
	readingTime: string;
}

export type Posts = Post[];
