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
}

export type Apps = App[];
