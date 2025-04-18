import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

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
            ? "underline underline-offset-[6px] decoration-2 decoration-orange-500"
            : "",
          " dark:hover:text-gray-400 px-2",
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

export default function NavBar() {
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
                  className="w-1/4 md:w-24 dark:hidden"
                  alt="luqmanoop logo"
                />
                <img
                  src="/assets/logo-dark.png"
                  alt="luqmanoop logo"
                  className="w-1/4 md:w-24 hidden dark:block"
                />
              </NavLink>
            </div>
            <div className="space-x-6 hidden md:flex font-medium px-12 py-4">
              {pagesLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>

            <div className="md:hidden">
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
}
