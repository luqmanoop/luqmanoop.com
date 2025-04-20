import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigation } from "react-router";

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
            ? "underline underline-offset-[8px] decoration-2 decoration-orange-500"
            : "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full",
          " dark:hover:text-gray-400",
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

  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state !== "loading") return;

    document.body.classList.remove("overflow-hidden");
    const navigationElement = document.getElementById("navigation");
    
    if (!navigationElement || navigationElement.classList.contains("hidden")) return;
    
    navigationElement.classList.add("hidden");
  }, [navigation.state]);

  return (
    <header className="sticky top-0 z-50 shadow dark:shadow-none dark:border-b dark:border-slate-900 bg-white dark:bg-slate-950">
      <div className="flex flex-col md:flex-row max-w-6xl md:px-6 md:py-4 mx-auto">
        <div className="flex-1 flex justify-center items-center md:justify-start shadow md:shadow-none px-6 py-3 md:p-0">
          <NavLink to="/" viewTransition>
            <img
              src="/assets/logo-light.png"
              className="w-1/4 md:w-[5.4rem] dark:hidden"
              alt="luqmanoop logo"
            />
            <img
              src="/assets/logo-dark.png"
              alt="luqmanoop logo"
              className="w-1/4 md:w-[5.4rem] hidden dark:block"
            />
          </NavLink>

          <div className="md:hidden flex items-center gap-4 md:gap-2">
            <ThemeToggle />

            <button
              role="button"
              aria-label="Toggle menu"
              onClick={() => onToggleNavigation()}
              className="p-2 focus:ring-gray-300 focus:ring-4 focus:outline-none rounded-md focus:dark:ring-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
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
                <Link to={link.to} label={link.label} />
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
