import { ExternalLink } from "lucide-react";
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
			className="flex gap-2 md:border border-gray-200 rounded-lg md:p-6 bg-light dark:bg-black/20 sm:rounded-xl md:shadow-md dark:shadow-lg hover:shadow-xl dark:sm:hover:shadow-indigo-500/20 transition duration-500 dark:sm:border dark:border-slate-900"
		>
			{image && (
				<img
					src={image}
					alt={title}
					className="w-24 h-24 md:w-28 md:h-28 relative -top-2 -ml-2"
				/>
			)}

			<div className="flex flex-col gap-1">
				<h3
					className={`text-xl font-bold text-ellipsis line-clamp-2 flex items-center ${
						size === "large" ? "md:text-3xl" : ""
					}`}
				>
					{title}{" "}
					{isExternal && <ExternalLink className="w-4 h-4 ml-2 inline" />}
				</h3>
				<p
					className={`text-ellipsis sm:leading-tight leading-tight line-clamp-1 md:line-clamp-2 ${
						size === "large" ? "md:text-xl" : ""
					}`}
				>
					{description}
				</p>

				{tags.length > 0 && (
					<div className="flex items-stretch flex-wrap gap-2 mt-1 md:mt-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="text-[0.7rem] font-semibold bg-gray-200 dark:bg-slate-800 px-2 py-0.5 rounded-xl"
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
