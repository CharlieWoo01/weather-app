import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppWrapper } from "./wrappers/AppWrapper/AppWrapper";
import { Home, Settings } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/weather-app/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
