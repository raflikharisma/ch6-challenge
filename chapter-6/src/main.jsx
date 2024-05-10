import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);
