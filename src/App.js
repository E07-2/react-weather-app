import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./routes/Homepage/Homepage";
import WeatherDetails from "./routes/WeatherDetails/WeatherDetails";

import styles from "./App.module.css";

function App() {
  //    getter  setter
  const [theme, setTheme] = useState(false);

  const themeToggleHandler = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? styles.lightTheme : styles.darkTheme}>
      <button onClick={themeToggleHandler}>{theme ? <>🌞</> : <>🌛</>}</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weather" element={<WeatherDetails />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
