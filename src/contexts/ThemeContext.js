import { createContext, useState } from "react";
import styles from "../App.module.css";

const ThemeContext = createContext({});

// you can give this component any name you wish
function ThemeProvider({ children }) {
  //    getter  setter
  const [theme, setTheme] = useState(styles.darkTheme);

  const themeToggleHandler = () => {
    if (theme === styles.darkTheme) {
      setTheme(styles.lightTheme);
    } else {
      setTheme(styles.darkTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggleHandler }}>
      <button onClick={themeToggleHandler}>
        {theme === styles.lightTheme ? <>🌞</> : <>🌛</>}
      </button>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
