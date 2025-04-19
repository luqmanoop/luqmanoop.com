import { Menu } from "lucide-react";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="text-xl md:text-base">
        <div className="shadow dark:shadow-none dark:border-b dark:border-slate-900 bg-white dark:bg-slate-950">
          <div className="flex max-w-6xl p-4 md:py-0 mx-auto items-center justify-center">
            <div className="flex-1 items-center justify-center">
              <NavLink to="/" viewTransition className="font-bold">
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
            </div>
            <div className="space-x-8 hidden md:flex font-medium px-12 py-4 items-center">
              {pagesLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  onClick={() => setMenuOpen(false)}
                />
              ))}

              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />

              <button
                role="button"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 focus:ring-gray-300 focus:ring-4 focus:outline-none rounded-md focus:dark:ring-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="relative h-screen">
            <div className="absolute bottom-0 border-t border-gray-200 dark:border-gray-800 right-0 left-0 w-full h-full bg-white dark:bg-slate-950">
              <div className="space-y-6 flex flex-col font-medium px-4 py-4 h-full">
                {pagesLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    onClick={() => setMenuOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
