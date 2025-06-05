import { formatDate } from "date-fns";
import { Link } from "react-router";

import { SITE_NAME, SITE_URL, SOCIAL_HANDLE, getMetadata } from "~/utils";
import { fetchPosts } from "~/utils/blog";

import type { Route } from "./+types/blog";

export async function loader() {
	const posts = await fetchPosts();

	return {
		posts,
		metadata: getMetadata({
			title: `Blog - ${SITE_NAME}`,
			description: `Read writing on tech, productivity, life, and more by ${SITE_NAME} (${SOCIAL_HANDLE})`,
			canonicalUrl: `${SITE_URL}/blog`,
		}),
	};
}

export function meta({ data }: Route.MetaArgs) {
	return data.metadata;
}

export default function Blog({ loaderData }: Route.ComponentProps) {
	const { posts } = loaderData;

	return (
		<main className="flex flex-col flex-2/3 layout-default max-w-6xl mx-auto">
			<h1 className="tracking-tighter text-4xl font-bold">Blog</h1>
			<section className="mt-8 flex flex-col">
				{posts.map((post) => (
					<article
						key={post.slug}
						className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover-effect"
					>
						<Link
							viewTransition
							to={`/blog/${post.slug}`}
							className="no-underline flex items-center gap-4"
						>
							<div className="h-32 hidden md:block">
								{post.imageUrl && (
									<img
										src={post.imageUrl}
										alt={post.title}
										className="h-full object-cover rounded-lg"
									/>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<h2 className="text-2xl font-bold mb-1">{post.title}</h2>
								<p className="line-clamp-2 text-ellipsis font-normal">
									{post.description}
								</p>
								<div className="flex items-center gap-2 text-sm">
									<span>{post.readingTime}</span>
									<span>•</span>
									<span>
										{formatDate(new Date(post.date), "MMMM dd, yyyy")}
									</span>
								</div>
							</div>
						</Link>
					</article>
				))}
			</section>
		</main>
	);
}
