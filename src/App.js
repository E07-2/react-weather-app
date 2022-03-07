import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginContext } from "./contexts/LoginContext";
import { ThemeContext } from "./contexts/ThemeContext";
import Homepage from "./routes/Homepage/Homepage";
import WeatherDetails from "./routes/WeatherDetails/WeatherDetails";

import styles from "./App.module.css";

function App() {
  //    getter  setter
  const [theme, setTheme] = useState(false);

  const themeToggleHandler = () => {
    setTheme(!theme);
  };

  const loginData = {
    username: "pepsi",
    userId: "98saudih8a7sda8sadad",
  };

  // Part 2 - Providing values to the context
  return (
    <LoginContext.Provider value={loginData}>
      <ThemeContext.Provider value={{ theme }}>
        <div className={theme ? styles.lightTheme : styles.darkTheme}>
          <button onClick={themeToggleHandler}>
            {theme ? <>🌞</> : <>🌛</>}
          </button>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/weather" element={<WeatherDetails />} />
              <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
