import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addThemeInLocalStorage } from "../store/features/productSlice";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  // получаем диспатч для вызова функции addThemeInLocalStorage 
  const dispatch = useDispatch();   

  // получаем тему из localStorage
  const savedTheme = JSON.parse(localStorage.getItem("theme"));

  // используем useState для управления темой
  const [theme, setTheme] = useState(savedTheme);

  // Функция для смены темы
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    dispatch(addThemeInLocalStorage({ theme: newTheme }));
  };

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
