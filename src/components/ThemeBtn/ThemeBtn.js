import React from "react";
import useDarkMode from "use-dark-mode";
import { useTheme } from "../utils/useTheme";
import "./ThemeBtn.scss";

const ThemeBtn = () => {
  const darkMode = useDarkMode(true);

  const theme = useTheme();

  return (
    <button
      className={`btn-theme ${theme}`}
      type="button"
      onClick={darkMode.toggle}
    >
      {theme === "dark-mode" ? "Dark mode" : "Light mode"}
    </button>
  );
};
export default ThemeBtn;
