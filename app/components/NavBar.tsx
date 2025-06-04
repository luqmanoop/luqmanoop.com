import { Menu } from "lucide-react";
import { NavLink } from "react-router";

import { ThemeToggle } from "./ThemeToggle";

const Link = ({
	to,
	label,
	onClick,
}: {
	to: string;
	label: string;
	onClick?: () => void;
}) => {
	return (
		<NavLink
			to={to}
			viewTransition
			className={({ isActive }) =>
				[
					isActive
						? "underline underline-offset-[8px] decoration-4 decoration-orange-500"
						: "relative after:content-[''] after:absolute after:-bottom-[0.3rem] after:left-0 after:w-0 after:h-[4px] after:bg-orange-500 after:transition-all after:duration-200 hover:after:w-full",
					" dark:hover:text-gray-400 select-none",
				].join(" ")
			}
			onClick={onClick}
		>
			<span className="">{label}</span>
		</NavLink>
	);
};

const pagesLinks = [
	{ to: "/apps", label: "Apps" },
	{ to: "/blog", label: "Blog" },
	{ to: "/uses", label: "Uses" },
	{ to: "/about", label: "About" },
];

export const NavBar = () => {
	const onToggleNavigation = () => {
		document.body.classList.toggle("overflow-hidden");
		document.getElementById("navigation")?.classList.toggle("hidden");
	};

	const handleNavigationItemClick = () => {
		document.body.classList.remove("overflow-hidden");
		const navigationElement = document.getElementById("navigation");

		if (!navigationElement || navigationElement.classList.contains("hidden")) {
			return;
		}

		navigationElement.classList.add("hidden");
	};

	return (
		<header className="sticky top-0 z-50 bg-light dark:bg-dark select-none">
			<div className="flex flex-col md:flex-row max-w-6xl md:px-6 md:py-4 mx-auto">
				<div className="flex-1 flex justify-between md:grid-cols-[auto_1fr_auto] items-center md:flex md:justify-start md:shadow-none px-3 py-4 md:p-0 border-b border-gray-200 dark:border-b dark:border-slate-900 md:border-none">
					<button
						type="button"
						aria-label="Toggle menu"
						onClick={() => onToggleNavigation()}
						className=" focus:ring-gray-300 focus:ring-4 focus:outline-none rounded-md focus:dark:ring-gray-700 md:hidden"
					>
						<Menu className="h-6 w-6" />
					</button>

					<NavLink
						to="/"
						viewTransition
						onClick={handleNavigationItemClick}
						className="flex justify-center"
					>
						<h3 className="text-lg font-semibold">Luqman Olushi</h3>
					</NavLink>

					<div className=" md:hidden">
						<ThemeToggle />
					</div>
				</div>

				<nav
					className="items-center w-full md:w-auto hidden md:flex h-screen md:h-auto"
					id="navigation"
					aria-label="Navigation"
				>
					<ul className="md:space-x-8 space-y-8 md:space-y-0 px-6 py-6 md:p-0 md:flex font-medium md:items-center text-lg md:text-base">
						{pagesLinks.map((link) => (
							<li key={link.to} className="md:inline-flex">
								<Link
									to={link.to}
									label={link.label}
									onClick={handleNavigationItemClick}
								/>
							</li>
						))}

						<li className="hidden md:inline-flex">
							<ThemeToggle />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
