import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);  //

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

    // функция для смены темы
  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>   
      {children}
    </ThemeContext.Provider>
  );
};
//  {children}   - пропс компонент c помощью него передаем тему