import { ExternalLink } from "lucide-react";
import { useLocation } from "react-router";
import { Link } from "react-router";

type CardProps = {
	title: string;
	description: string;
	link: string;
	image?: string;
	tags?: string[];
	size?: "medium" | "large";
};

const Card = (props: CardProps) => {
	const { title, description, link, image, tags = [], size = "medium" } = props;

	const isExternal = !link.startsWith("/");

	return (
		<Link
			to={link}
			viewTransition={!isExternal}
			className="flex gap-1 border border-gray-100 rounded-lg p-3 md:p-6 bg-white dark:bg-black/20 sm:rounded-xl shadow-md dark:shadow-lg hover:shadow-xl dark:sm:hover:shadow-indigo-500/20 transition duration-500 dark:sm:border dark:border-slate-900"
		>
			{image && (
				<img
					src={image}
					alt={title}
					className="w-24 h-24 relative -top-1 -left-1"
				/>
			)}

			<div className="flex flex-col gap-2">
				<h3
					className={`font-bold text-ellipsis line-clamp-2 flex items-center ${
						size === "medium" ? "text-lg" : "text-2xl"
					}`}
				>
					{title}{" "}
					{isExternal && <ExternalLink className="w-4 h-4 ml-2 inline" />}
				</h3>
				<p
					className={`text-sm grow text-ellipsis line-clamp-2 ${
						size === "medium" ? "text-sm" : "md:text-base"
					}`}
				>
					{description}
				</p>

				{tags.length > 0 && (
					<div className="flex items-stretch flex-wrap gap-2 mt-4">
						{tags.map((tag) => (
							<span
								key={tag}
								className="text-[0.66rem] bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded-full"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</Link>
	);
};

export default Card;
