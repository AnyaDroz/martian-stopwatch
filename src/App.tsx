import React from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Warning from "./components/self-destruct/Warning";
import { Routes, Route } from "react-router-dom";

function App() {
  // TODO put warning page on new page
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Stopwatch />} />
        <Route path="/warning" index element={<Warning />} />
      </Routes>
    </div>
  );
}

export default App;
