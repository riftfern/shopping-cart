import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Nav, Home } from "./components";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}
