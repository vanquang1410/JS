import React, { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import * as process from 'process';
const lightTheme = "light-mode";
const darkTheme = "dark-mode";

export const useTheme = () => {
  const darkMode = useDarkMode();

  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    setTheme(darkMode?.value ? darkTheme : lightTheme);
  }, [darkMode.value]);

  return theme;
};


export const BASE_URL = process.env.REACT_APP_URL_API;
