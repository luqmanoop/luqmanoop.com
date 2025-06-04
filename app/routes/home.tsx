import { SITE_URL, getMetadata } from "~/utils";
import type { Route } from "./+types/home";

export async function loader() {
	return {
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

export default function HomePage() {
	return (
		<main className="flex flex-col flex-2/3 justify-center items-center">
			<div className="flex flex-col items-center text-center space-y-2 py-3 max-w-4xl -mt-48">
				<img
					src="/assets/profile.jpeg"
					alt="Luqman Olushi Avatar"
					className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full"
				/>
				<h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-teal-600 to-orange-600 text-transparent bg-clip-text tracking-tighter">
					Luqman Olushi{" "}
					<span title="Opemipo" className="hidden md:inline">
						O.
					</span>
				</h1>
				<p className="px-3 font-medium text-gray-900 dark:text-gray-500 text-lg md:text-2xl tracking-tight">
					Software Engineer. Lifelong learner
				</p>

				<div className="flex flex-row mt-3 space-x-4 md:text-lg font-semibold text-gray-900 dark:text-gray-500 uppercase">
					<a
						href="https://github.com/luqmanoop"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline"
					>
						GitHub
					</a>
					<a
						href="https://twitter.com/luqmanoop"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline"
					>
						Twitter
					</a>
					<a
						href="https://www.youtube.com/@luqmanoop"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline"
					>
						YouTube
					</a>
				</div>
			</div>
		</main>
	);
}
