import type { Meta } from "~/types";

import { SITE_NAME, SITE_URL } from "./constants";

export const getMetadata = (meta: Meta) => {
	const title = `${meta.title ? `${meta.title} — ` : ""}${SITE_NAME}`;
	const { description, imageUrl, canonicalUrl: url = SITE_URL } = meta;

	return [
		{ title },
		{
			name: "description",
			content: description,
		},
		// Canonical URL
		{
			tagName: "link",
			rel: "canonical",
			href: url,
		},
		// Open Graph metadata
		{
			property: "og:title",
			content: title,
		},
		{
			property: "og:description",
			content: description,
		},
		{
			property: "og:image",
			content: imageUrl,
		},
		{
			property: "og:url",
			content: url,
		},
		// Twitter/X metadata
		{
			property: "twitter:card",
			content: "summary_large_image",
		},
		{
			property: "twitter:title",
			content: title,
		},
		{
			property: "twitter:description",
			content: description,
		},
		{
			property: "twitter:image",
			content: imageUrl,
		},
		{
			property: "twitter:url",
			content: url,
		},
	];
};
