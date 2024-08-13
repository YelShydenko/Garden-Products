import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import "./ThemeComponent.scss";
import { useContext } from "react";

const ThemeComponent = () => {
  const { theme, switchTheme } = useContext(ThemeContext); // Передаем нашу тему

  return (
    <div className="toggle__theme">
      <input
        onChange={switchTheme}
        type="checkbox"
        id="toggle-btn"
        checked={theme === "dark"}
      />
      <label htmlFor="toggle-btn" className="toggle-label">
        <IoSunnyOutline
          className={`icon sun-icon ${theme === "dark" ? "visible" : ""}`}  // Иконка солнца видна при темной теме
        />
        <IoMoonOutline
          className={`icon moon-icon ${theme === "light" ? "visible" : ""}`} // Иконка луны видна при светлой теме
        />
      </label>
    </div>
  );
};

export default ThemeComponent;
