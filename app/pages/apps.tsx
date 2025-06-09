import { useEffect, useMemo, useState } from "react";
import { annotate } from "rough-notation";

import { Card } from "~/components";

import { SITE_NAME, SITE_URL, getMetadata } from "~/utils";
import { fetchApps } from "~/utils/apps";
import type { Route } from "./+types/apps";

export async function loader() {
	const apps = await fetchApps();

	const metadata = getMetadata({
		title: "Apps",
		description: `Apps built for the web, macOS, and iOS by ${SITE_NAME}`,
		canonicalUrl: `${SITE_URL}/apps`,
	});

	return {
		apps,
		metadata,
	};
}

export const meta = ({ data }: Route.MetaArgs) => data.metadata;

export default function Apps({ loaderData }: Route.ComponentProps) {
	const { apps } = loaderData;

	const [search, setSearch] = useState("");

	const filteredApps = useMemo(
		() =>
			apps?.filter((app) =>
				app.title.toLowerCase().includes(search.toLowerCase()),
			) ?? [],
		[apps, search],
	);

	useEffect(() => {
		const platformsElement = document.getElementById("platforms");

		if (!platformsElement) {
			return;
		}

		annotate(platformsElement, {
			type: "underline",
			color: "#ff6900",
		}).show();
	}, []);

	return (
		<div>
			<div className="flex flex-col items-center gap-2 mb-10">
				<h1 className="leading-snug md:leading-normal tracking-tighter text-[2.4rem] md:text-6xl pr-1 font-bold text-center bg-gradient-to-r from-teal-600 to-orange-600 text-transparent bg-clip-text">
					Apps
				</h1>
				<p className="text-center text-lg md:text-2xl tracking-tight font-semibold">
					Built for{" "}
					<span id="platforms" className="font-semibold">
						web, macOS &amp; iOS
					</span>{" "}
					<br className="hidden" />
					platforms
				</p>
			</div>

			<input
				type="search"
				placeholder="Search apps..."
				className="hidden w-full py-2 px-4 rounded-lg border border-gray-300 dark:border-slate-700 mb-8 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-700"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
				{filteredApps.map((app) => (
					<Card
						key={app.title}
						title={app.title}
						description={app.description}
						link={`/apps/${app.slug}`}
						tags={app.tags}
						image={app.assets.icon}
						isNew={app.isNew}
						isPaid={app.isPaid}
					/>
				))}
			</div>
		</div>
	);
}
