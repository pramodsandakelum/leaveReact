import logo from "./logo.svg";
import "./App.css";
import { leaveMain } from "./leaveMain";
import { holidays } from "./holidays";
//import Login from "./Login";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App Container">
        <switch>
          <Routes>
            <Route path="/leaveMain" Component={leaveMain} />
            <Route path="/holidays" Component={holidays} />
            <Route path="/" element={<Navigate to="/leaveMain" />} />
          </Routes>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
