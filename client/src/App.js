// Dependencies
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Backdrop from "./components/Reusable/Backdrop";
import Snackbar from "./components/Reusable/Snackbar";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="w-full h-screen">
      <Router>
        <Backdrop />
        <Snackbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
