import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const isServer = typeof window === "undefined";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(isServer ? "dark" : (localStorage.theme as Theme));

  useEffect(() => {
    if (localStorage.theme && localStorage.theme !== theme) {
      setTheme(localStorage.theme as Theme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.toggle("dark", true);
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.toggle("dark", false);
    }
  }, [theme]);

  return { theme, setTheme };
};
