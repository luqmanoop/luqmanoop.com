import { formatDate } from "date-fns";
import { getMDXComponent } from "mdx-bundler/dist/client";
import { useMemo } from "react";

import { fetchPost, getMetadata } from "~/utils";

import { BackToOverview } from "~/components";
import type { Route } from "./+types/blog-post";

export async function loader({ params }: Route.LoaderArgs) {
	const { frontmatter, code } = await fetchPost(params.postSlug);

	return {
		code,
		post: frontmatter,
		metadata: getMetadata(frontmatter),
	};
}

export const meta = ({ data }: Route.MetaArgs) => data.metadata;

export default function BlogPost({ loaderData }: Route.ComponentProps) {
	const { post, code } = loaderData;

	const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

	return (
		<main className="flex flex-col flex-2/3 layout-default w-full">
			<div className="max-w-4xl mx-auto">
				<BackToOverview to="/blog" label="Back to blog" />

				<div className="flex flex-col gap-4 items-center my-6 md:my-8">
					<p className="text-sm">{post.readingTime}</p>
					{post.imageUrl && (
						<div className="w-full md:h-96 object-cover rounded-lg overflow-hidden relative">
							<img
								src={post.imageUrl}
								alt={post.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-black/90 to-black/5" />
							<div className="absolute bottom-0 left-0 p-4">
								<p className="text-sm text-gray-300 font-medium">
									{formatDate(post.date, "MMMM dd, yyyy")}
								</p>
								<h1 className="text-2xl md:text-3xl font-bold text-gray-200">
									{post.title}
								</h1>
							</div>
						</div>
					)}
				</div>

				<div className="prose dark:prose-invert">
					<MdxComponent />
				</div>
			</div>
		</main>
	);
}
