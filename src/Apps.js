import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ActionItems from "./ActionItems";
import ComplianceBot from "./ComplianceBot";
import InsightsBot from "./InsightsBot";
import ProposalGenerator from "./ProposalGenerator";

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/action-items">Action Items</Link>
        <Link to="/compliance-bot">Compliance Bot</Link>
        <Link to="/insights-bot">Insights Bot</Link>
        <Link to="/proposal-generator">Proposal Generator</Link>
      </div>

      <Routes>
        <Route path="/action-items" element={<ActionItems />} />
        <Route path="/compliance-bot" element={<ComplianceBot />} />
        <Route path="/insights-bot" element={<InsightsBot />} />
        <Route path="/proposal-generator" element={<ProposalGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
