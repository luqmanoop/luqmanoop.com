import type { HTMLAttributes } from "react";
import { Link } from "react-router";

type CardProps = {
	title: string;
	description: string;
	link: string;
	image?: string;
	tags?: string[];
	isNew?: boolean;
	isPaid?: boolean;
};

const Badge = ({
	label,
	className = "bg-gray-200/30 dark:bg-slate-800",
}: {
	label: string;
	className?: HTMLAttributes<HTMLSpanElement>["className"];
}) => {
	return (
		<span
			className={`text-[0.7rem] font-medium px-2 py-0.5 rounded-xl border border-slate-950/10 ${className}`}
		>
			{label}
		</span>
	);
};

const Card = (props: CardProps) => {
	const {
		title,
		description,
		link,
		image,
		tags = [],
		isNew = false,
		isPaid = false,
	} = props;

	return (
		<Link
			to={link}
			viewTransition
			className="flex flex-col items-center gap-2 border border-gray-200 dark:border-slate-800 rounded-lg p-4 md:py-6 sm:rounded-xl relative hover-effect"
		>
			{isNew && (
				<span className="absolute top-0 right-0 bg-orange-500 dark:text-slate-950 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
					NEW
				</span>
			)}
			{image && (
				<img src={image} alt={title} className="w-28 h-28 md:w-32 md:h-32" />
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
						{isPaid && (
							<Badge
								label="paid"
								className="bg-amber-200 dark:bg-amber-200/80 text-slate-950"
							/>
						)}

						{!isPaid && <Badge label="free" />}

						{tags.map((tag) => (
							<Badge key={tag} label={tag} />
						))}
					</div>
				)}
			</div>
		</Link>
	);
};

export default Card;
