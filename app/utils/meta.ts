import { SITE_NAME } from "./constants";
import type { Meta } from "~/types";


export const getMetadata = (meta: Meta) => {
  const title = `${meta.title} - ${SITE_NAME}`;
  const { description, imageUrl: image, url } = meta;

  return [
    { title },
    {
      name: "description",
      content: description,
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
      content: image,
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
      content: image,
    },
    {
      property: "twitter:url",
      content: url,
    },
  ];
};
