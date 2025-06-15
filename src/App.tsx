import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./components/introduction";
import InteractionGradient from "./components/interaction-gradient";
import { useEffect } from "react";
import { useTheme } from "./context/theme-provider";

const App = () => {
  const { theme } = useTheme();
  useEffect(() => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = theme === "dark" ? "/user_dark.jpg" : "/user_light.png";
    }
  }, [theme]);

  return (
    <Router>
      <InteractionGradient />
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
};

export default App;
