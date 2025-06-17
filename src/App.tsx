import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./context/theme-provider";
import { FixedGradient } from "./components/fixed-gradient";
import InteractionGradient from "./components/interaction-gradient";
import Profile from "./components/profile";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = theme === "dark" ? "/user_dark.png" : "/user_light.png";
    }
  }, [theme]);

  return (
    <Router>
      <FixedGradient />
      <InteractionGradient />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
