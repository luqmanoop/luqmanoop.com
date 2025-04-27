import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router";

type BackToOverviewProps = {
	label?: string;
	to: string;
};

export function BackToOverview({ to, label }: BackToOverviewProps) {
	return (
		<Link
			to={to}
			viewTransition
			className="no-underline flex items-center gap-2 group text-lg text-shadow md:hidden"
		>
			<ArrowLeftIcon className="w-4 h-4 transition-all duration-300 group-hover:-translate-x-1" />{" "}
			{label && <span className="text-sm font-semibold">{label}</span>}
		</Link>
	);
}
