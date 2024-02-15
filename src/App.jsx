import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import { Home } from "./pages/Home";
import { StudioIndex } from "./pages/StudioIndex";
import { AppHeader } from "./cmp/AppHeader";

export function App() {
  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<StudioIndex />} />
        </Routes>
      </div>
    </Router>
  );
}
