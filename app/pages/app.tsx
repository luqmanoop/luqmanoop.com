import { isEmpty } from "lodash-es";
import { DownloadIcon } from "lucide-react";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { Link } from "react-router";

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

	const screenshots = useMemo(() => {
		const { screenshots, videos } = app.assets;
		const appMediaAssets = [...videos, ...screenshots];

		if (isEmpty(appMediaAssets)) {
			return null;
		}

		return (
			<div className="flex flex-col gap-6">
				{videos.map((videoSrc) => (
					<video key={videoSrc} loop autoPlay muted>
						<source src={videoSrc} type="video/mp4" />
					</video>
				))}

				{screenshots.map((screenshotSrc) => (
					<img key={screenshotSrc} src={screenshotSrc} alt={app.title} />
				))}
			</div>
		);
	}, [app]);

	return (
		<div className="">
			<BackToOverview to="/apps" label="Go to apps" />

			<section>
				<div className="flex flex-col items-center text-center gap-2 pt-4 md:mb-20">
					<img
						src={app.assets.icon}
						alt={app.title}
						className="w-40 h-40 md:w-56 md:h-56 md:-mt-5"
					/>
					<div className="flex flex-col gap-2 items-center">
						<h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
							{app.title}
						</h1>
						<p className="text-xl md:text-3xl tracking-tight mb-6">
							{app.description}
						</p>

						<button
							type="button"
							className="button flex items-center justify-center gap-2"
						>
							<DownloadIcon size={16} /> <Link to="#">Install extension</Link>
						</button>
					</div>
				</div>
			</section>

			<section className="border-t py-6 mt-6 border-gray-200 dark:border-slate-900 mb-8">
				{screenshots}
			</section>

			<div className="prose dark:prose-invert prose-overrides">
				<MdxComponent app={app} />
			</div>
		</div>
	);
}
