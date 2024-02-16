import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/index";
import { NotFound } from "../pages/NotFound/index";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
