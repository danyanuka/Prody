import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import { Home } from "./pages/Home";
import { StudioIndex } from "./pages/StudioIndex";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<StudioIndex />} />
      </Routes>
    </Router>
  );
}
