import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  // используем useState для управления темой
  const [theme, setTheme] = useState("light");

  // Функция для смены темы
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    // получаем тему из localStorage
    const savedTheme = JSON.parse(localStorage.getItem("theme"));

    setTheme(savedTheme);
  },[])

  // Обновляем класс body в зависимости от темы, чтобы менять именно цвет body
  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
