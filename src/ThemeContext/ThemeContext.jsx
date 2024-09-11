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
    // Получаем тему из localStorage, если она сохранена
    const savedTheme = JSON.parse(localStorage.getItem("theme"));

    // Если тема не найдена, устанавливаем светлую тему по умолчанию
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, []);

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
