import { Routes, Route } from "react-router-dom";

import App from "../pages/App";
import { Aoki } from "../pages/Aoki";
import { ProtectedRoute } from "../pages/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/Aoki"
        element={
          <ProtectedRoute>
            <Aoki />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
