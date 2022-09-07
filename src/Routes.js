import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { Home, MoviesDetail } from "./pages";

export default function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<MoviesDetail />} />
    </BrowserRoutes>
  );
}
