import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return theme === "dark" ? (
    <SunIcon
      className="w-7 h-7 md:w-6 md:h-6 cursor-pointer hover:text-gray-400"
      aria-label="Toggle dark mode"
      onClick={() => setTheme("light")}
    />
  ) : (
    <MoonIcon
      className="w-7 h-7 md:w-6 md:h-6 cursor-pointer hover:text-gray-400"
      aria-label="Toggle dark mode"
      onClick={() => setTheme("dark")}
    />
  );
};
