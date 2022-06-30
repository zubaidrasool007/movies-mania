import React from "react";
import { Routes as BrowserRoutes, Route, } from "react-router-dom";
import MoviesMainPage from "./components/MoviesMainPage";
import MoviesDetailPage from "./components/MoviesDetailPage";
export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<MoviesMainPage />} />
      <Route path="detail/:id" element={<MoviesDetailPage />} />
    </BrowserRoutes>
  );
}
