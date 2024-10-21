import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppWrapper } from "./wrappers/AppWrapper/AppWrapper";
import { Home, Settings } from "./pages";
import { WeatherPath } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path={WeatherPath.Home} element={<Home />} />
          <Route path={WeatherPath.Settings} element={<Settings />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
