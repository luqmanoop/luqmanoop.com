import { resolve } from "node:path";
import { glob } from "glob";
import type { Assets } from "~/types";

import { PUBLIC_DIRNAME } from "./constants";

const toRelativePath = (path: string) => path.split(PUBLIC_DIRNAME)[1];

export const getAssets = async (dirname: string): Promise<Assets> => {
	const [[icon = ""], screenshots = [], videos = []] = await Promise.all([
		glob(resolve(dirname, "icon.{jpg,png,jpeg}")),
		getScreenshots(dirname),
		getVideos(dirname),
	]);

	return {
		icon: toRelativePath(icon),
		screenshots: screenshots.map(toRelativePath),
		videos: videos.map(toRelativePath),
	};
};

const getScreenshots = async (dirname: string) => {
	const screenshots = await glob(
		resolve(dirname, "screenshot*.{jpg,png,jpeg,gif,webp}"),
	);

	return screenshots.sort((a, b) => a.localeCompare(b));
};

const getVideos = async (dirname: string) => {
	const videos = await glob(resolve(dirname, "video*.{mp4,webm}"));

	return videos.sort((a, b) => a.localeCompare(b));
};

export const getPostImageUrl = async (dirname: string, slug: string) => {
	const postImages = await glob(
		resolve(dirname, `${slug}*.{png,jpg,jpeg,gif,webp}`),
	);

	if (postImages.length > 0) {
		return toRelativePath(postImages[0]);
	}

	return null;
};
