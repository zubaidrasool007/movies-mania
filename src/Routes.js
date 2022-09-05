import { Routes as BrowserRoutes, Route } from "react-router-dom";
// import { Home, MoviesDetailPage } from "./pages";
import Home from "./pages/Home";
import MoviesDetailPage from "./pages/MoviesDetailPage";
export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<MoviesDetailPage />} />
    </BrowserRoutes>
  );
}
