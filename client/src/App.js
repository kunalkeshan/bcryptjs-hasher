// Dependencies
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Backdrop from "./components/Reusable/Backdrop";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="w-full h-screen">
      <Router>
        <Backdrop />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
