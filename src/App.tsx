import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./components/introduction";
import InteractionGradient from "./components/interaction-gradient";

const App = () => {
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
