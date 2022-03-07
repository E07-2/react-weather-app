import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./routes/Homepage/Homepage";
import WeatherDetails from "./routes/WeatherDetails/WeatherDetails";

import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weather" element={<WeatherDetails />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
