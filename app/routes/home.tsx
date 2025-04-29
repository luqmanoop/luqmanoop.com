import { Card } from "~/components";
import { getFeaturedApps } from "~/utils/apps";

import { SITE_URL, getMetadata } from "~/utils";
import type { Route } from "./+types/home";

export async function loader() {
	const featuredApps = await getFeaturedApps();

	return {
		featuredApps,
		metadata: getMetadata({
			title: "",
			description: "Software Engineer, Part-Time Creator",
			canonicalUrl: SITE_URL,
		}),
	};
}

export function meta({ data }: Route.MetaArgs) {
	return data.metadata;
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
	const { featuredApps } = loaderData;

	return (
		<main className="layout-default max-w-4xl">
			<div className="flex flex-col items-center text-center space-y-2 py-3">
				<img
					src="/assets/profile.jpeg"
					alt="Luqman Olushi Avatar"
					className="w-36 h-36 object-cover border-6 border-gray-200 rounded-full"
				/>
				<h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-teal-600 to-orange-600 text-transparent bg-clip-text tracking-tighter">
					Luqman Olushi{" "}
					<span title="Opemipo" className="hidden md:inline">
						O.
					</span>
				</h1>
				<p className="text-gray-900 dark:text-gray-500 text-lg md:text-xl tracking-tight">
					Software Engineer,{" "}
					<span
						className="underline decoration-wavy underline-offset-2"
						title="🤞🏼"
					>
						<a
							href="https://youtube.com/@luqmanoop"
							target="_blank"
							rel="noopener noreferrer"
						>
							Part-Time Creator
						</a>
					</span>
				</p>
			</div>

			<section className="mt-16">
				<h2 className="text-sm font-medium text-gray-400 uppercase mb-4">
					Featured
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{featuredApps?.map((app) => (
						<Card
							key={app.title}
							title={app.title}
							image={app.assets.icon}
							description={app.description}
							link={`/apps/${app.slug}`}
							tags={app.tags}
						/>
					))}

					<Card
						title="Youtube"
						description="My YouTube channel. Subscribe to get notified when I upload new videos."
						link="https://youtube.com/@luqmanoop?sub_confirmation=1"
						tags={["youtube"]}
					/>

					<Card
						title="GitHub"
						description="A repository of my projects and open-source contributions."
						link="https://github.com/luqmanoop"
						tags={["github"]}
					/>
				</div>
			</section>
		</main>
	);
}
