import { useEffect } from "react";
import Typed from "typed.js";

import { Card } from "~/components";

import { SITE_NAME, SITE_URL, getMetadata } from "~/utils";
import { fetchApps } from "~/utils/apps";
import type { Route } from "./+types/apps";

export async function loader() {
	const apps = await fetchApps();

	const metadata = getMetadata({
		title: "Apps",
		description: `A collection of apps built by ${SITE_NAME}`,
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

	useEffect(() => {
		const typed = new Typed("#typed", {
			strings: ["web", "mac", "iOS"],
			typeSpeed: 80,
			backDelay: 1200,
			loop: true,
			smartBackspace: true,
		});

		typed.start();

		return () => typed.destroy();
	}, []);

	return (
		<div>
			<h1 className="pt-3 pb-10 md:pt-6 -mx-4 md:-mx-0 leading-snug md:leading-normal tracking-tighter text-[2.4rem] md:text-6xl font-bold text-center text-shadow text-shadow-red-500">
				Quality{" "}
				<span
					id="typed"
					className="bg-gradient-to-r from-teal-600 to-orange-600 text-transparent bg-clip-text"
				/>{" "}
				apps
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
				{apps?.map((app) => (
					<Card
						key={app.title}
						title={app.title}
						description={app.description}
						link={`/apps/${app.slug}`}
						size="large"
						tags={app.tags}
						image={app.assets.icon}
					/>
				))}
			</div>
		</div>
	);
}
