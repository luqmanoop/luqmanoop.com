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

	return (
		<Link
			to={link}
			viewTransition
			className="flex flex-col items-center gap-2 border border-gray-200 dark:border-slate-800 rounded-lg p-4 md:py-6 sm:rounded-xl shadow-2xs md:shadow-sm dark:shadow-lg hover:shadow-xl dark:sm:hover:shadow-indigo-500/20 transition duration-500"
		>
			{image && (
				<img
					src={image}
					alt={title}
					className="w-28 h-28 md:w-32 md:h-32 relative"
				/>
			)}
			<h3 className="text-2xl font-bold text-ellipsis line-clamp-1 text-inherit">
				{title}
			</h3>

			<p className="text-ellipsis sm:leading-tight leading-tight line-clamp-1 text-lg">
				{description}
			</p>

			<div>
				{tags.length > 0 && (
					<div className="flex items-stretch flex-wrap gap-2 mt-2">
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
