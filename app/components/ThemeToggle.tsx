import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return theme === "dark" ? (
		<SunIcon
			className="w-5 h-5 cursor-pointer hover:text-gray-400 select-none"
			aria-label="Toggle dark mode"
			onClick={() => setTheme("light")}
		/>
	) : (
		<MoonIcon
			className="w-5 h-5 cursor-pointer hover:text-gray-400 select-none"
			aria-label="Toggle dark mode"
			onClick={() => setTheme("dark")}
		/>
	);
};
