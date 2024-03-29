import React from 'react';
import './App.css';
import TopBar from "./components/TopBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeekAhead from "./pages/WeekAhead";
import Planner from "./pages/Planner";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/planner"} element={<Planner />} />
          <Route path={"/week-ahead"} element={<WeekAhead />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
