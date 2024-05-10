import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";
import Cars from "./pages/Cars.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  </BrowserRouter>
);
