import React from 'react';
import { useTheme } from '../../ThemeContext/ThemeContext';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import './ThemeComponent.scss';


const ThemeComponent = () => {
  const { theme, switchTheme } = useTheme();  //передаем нашу тему

  return (
    <div className='toggle__theme'>
      <input onChange={switchTheme} type="checkbox" id="toggle-btn" checked={theme === 'dark'} />
      <label htmlFor="toggle-btn" className="toggle-label">
        {theme === 'light' ? (
          <IoSunnyOutline className='icon sun-icon' />
        ) : (
          <IoMoonOutline className='icon moon-icon' />
        )}
      </label>
    </div>
  );
};

export default ThemeComponent;

