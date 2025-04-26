import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router";

type BackToOverviewProps = {
  to: string;
};

export function BackToOverview({ to }: BackToOverviewProps) {
  return (
    <Link
      to={to}
      viewTransition
      className="no-underline flex items-center gap-2 group"
    >
      <ArrowLeftIcon className="w-6 h-6 transition-all duration-300 group-hover:-translate-x-1" />
      Back to overview
    </Link>
  );
}
