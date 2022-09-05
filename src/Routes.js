import React from "react";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
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
