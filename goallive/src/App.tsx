import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Games from "./pages/Games";
import Standings from "./pages/Standings";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/games" replace />} />
        <Route path="/games" element={<Games />} />
        <Route path="/standings/:leagueId" element={<Standings />} />
      </Routes>
    </Router>
  );
};

export default App;
