import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

import { BackToOverview } from "~/components";
import { fetchApp, getMetadata } from "~/utils";

import type { Route } from "./+types/app";

export async function loader({ params }: Route.LoaderArgs) {
	const { frontmatter, code } = await fetchApp(params.appSlug);

	return {
		code,
		app: frontmatter,
		metadata: getMetadata(frontmatter),
	};
}

export const meta = ({ data }: Route.MetaArgs) => data.metadata;

export default function AppPage({ loaderData }: Route.ComponentProps) {
	const { app, code } = loaderData;

	const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

	return (
		<div className="prose dark:prose-invert prose-overrides">
			<BackToOverview to="/apps" />

			<section className="flex flex-col items-center text-center gap-4 mt-4 mb-16">
				<img src={app.icon} alt={app.title} className="w-56 h-56 mb-0" />
				<h1 className="text-4xl md:text-6xl font-bold">{app.title}</h1>
				<p className="text-xl md:text-2xl mt-0 mb-2">{app.description}</p>
			</section>

			<div>
				<MdxComponent app={app} />
			</div>
		</div>
	);
}
